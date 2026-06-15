/**
 * grandocs-mcp — a stateless Cloudflare Worker MCP server for docs search over
 * the grandocs (unofficial MA Lighting docs mirror) static index.
 *
 * Transport: MCP Streamable HTTP at `POST /mcp`.
 *
 * Why JSON-RPC is implemented directly (and we do NOT use the SDK's
 * `StreamableHTTPServerTransport`): that transport is bound to Node's
 * `http.IncomingMessage` / `http.ServerResponse` objects, which do not exist in
 * the Workers runtime. The clean, fully Workers-compatible path for a stateless
 * server is to answer the JSON-RPC methods (`initialize`, `tools/list`,
 * `tools/call`, plus `ping` and ignorable notifications) directly over the
 * `fetch` handler and return web-standard `Response` objects. We still pull the
 * canonical method names / error codes from `@modelcontextprotocol/sdk` so the
 * wire protocol stays in lockstep with the spec.
 *
 * State: none. The MiniSearch index is fetched once on first request and held in
 * a module-scoped global for the lifetime of the isolate (re-fetched lazily if
 * the isolate is recycled). Nothing is persisted; redeploy only when code
 * changes.
 */

import MiniSearch from 'minisearch'
import {
	LATEST_PROTOCOL_VERSION,
	SUPPORTED_PROTOCOL_VERSIONS,
	ErrorCode,
} from '@modelcontextprotocol/sdk/types.js'

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Origin the static index, meta, and `.md` twins are published from. */
const SITE_ORIGIN = 'https://grandocs.samcarlton.com'
const SEARCH_INDEX_URL = `${SITE_ORIGIN}/agent/search-index.json`
const META_URL = `${SITE_ORIGIN}/agent/meta.json`

const SERVER_NAME = 'grandocs'
const SERVER_VERSION = '0.1.0'

/**
 * Fields the build step (phase 3) tokenizes into the MiniSearch index. These
 * MUST match the options used when the index was serialized with
 * `miniSearch.toJSON()`, or `MiniSearch.loadJSON()` will mis-read the index.
 */
const INDEX_FIELDS = ['title', 'headings', 'excerpt'] as const
/** Fields stored alongside each doc so search hits can be rendered without a second fetch. */
const INDEX_STORE_FIELDS = [
	'title',
	'path',
	'product',
	'version',
	'lang',
	'excerpt',
] as const

/** One line appended to every tool result so agents cite the canonical source. */
const ATTRIBUTION =
	'\n\n---\ngrandocs is an UNOFFICIAL, fan-maintained mirror of MA Lighting documentation. ' +
	'For authoritative or safety-relevant information (conformity, electrical, safety), ' +
	'always cite the canonical page on help.malighting.com (see the source URL above).'

const VALID_PRODUCTS = [
	'grandma3',
	'grandma2',
	'dot2',
	'utility',
	'network',
] as const
type Product = (typeof VALID_PRODUCTS)[number]

// ---------------------------------------------------------------------------
// Shape of a stored doc inside the MiniSearch index (phase-3 contract)
// ---------------------------------------------------------------------------

interface StoredDoc {
	/** MiniSearch internal id. */
	id: string | number
	title: string
	/** Site-relative path WITHOUT leading slash and WITHOUT extension, e.g. "grandma3/2-4/cue_store". */
	path: string
	product: Product
	/** Version dir segment as it appears in the URL, e.g. "2-4". Absent for unversioned products. */
	version?: string
	lang?: string
	excerpt?: string
}

interface SearchHit {
	title: string
	url: string
	mdUrl: string
	product: string
	version: string | null
	snippet: string
}

// ---------------------------------------------------------------------------
// Lazy, module-scoped index cache
// ---------------------------------------------------------------------------

let indexPromise: Promise<MiniSearch<StoredDoc>> | null = null
let metaPromise: Promise<unknown> | null = null

/** Fetch + deserialize the MiniSearch index exactly once per isolate. */
function getIndex(): Promise<MiniSearch<StoredDoc>> {
	if (!indexPromise) {
		indexPromise = (async () => {
			const res = await fetch(SEARCH_INDEX_URL, {
				cf: { cacheTtl: 3600, cacheEverything: true },
			})
			if (!res.ok) {
				throw new Error(
					`failed to fetch search index (${res.status} ${res.statusText}) from ${SEARCH_INDEX_URL}`,
				)
			}
			const json = await res.text()
			return MiniSearch.loadJSON<StoredDoc>(json, {
				fields: [...INDEX_FIELDS],
				storeFields: [...INDEX_STORE_FIELDS],
			})
		})().catch((err) => {
			// Reset so a transient failure does not poison the isolate permanently.
			indexPromise = null
			throw err
		})
	}
	return indexPromise
}

/** Fetch + cache the crawl meta matrix once per isolate. */
function getMeta(): Promise<unknown> {
	if (!metaPromise) {
		metaPromise = (async () => {
			const res = await fetch(META_URL, {
				cf: { cacheTtl: 3600, cacheEverything: true },
			})
			if (!res.ok) {
				throw new Error(
					`failed to fetch meta (${res.status} ${res.statusText}) from ${META_URL}`,
				)
			}
			return res.json()
		})().catch((err) => {
			metaPromise = null
			throw err
		})
	}
	return metaPromise
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalizePath(input: string): string {
	let p = input.trim()
	try {
		// Allow callers to pass a full grandocs URL.
		if (p.startsWith('http://') || p.startsWith('https://')) {
			p = new URL(p).pathname
		}
	} catch {
		/* fall through with the raw string */
	}
	// Drop leading/trailing slashes and a trailing `.md` if present.
	p = p.replace(/^\/+/, '').replace(/\/+$/, '')
	p = p.replace(/\.md$/i, '')
	// Normalize a trailing `/index` to the product root, matching the site's
	// path scheme (e.g. "grandma2/index" -> "grandma2").
	p = p.replace(/\/index$/i, '')
	return p
}

function pageUrl(path: string): string {
	return `${SITE_ORIGIN}/${path}/`
}

function mdUrl(path: string): string {
	return `${SITE_ORIGIN}/${path}.md`
}

function toHit(doc: StoredDoc): SearchHit {
	return {
		title: doc.title,
		url: pageUrl(doc.path),
		mdUrl: mdUrl(doc.path),
		product: doc.product,
		version: doc.version ?? null,
		snippet: (doc.excerpt ?? '').slice(0, 300),
	}
}

function isValidProduct(p: string | undefined): p is Product {
	return !!p && (VALID_PRODUCTS as readonly string[]).includes(p)
}

// ---------------------------------------------------------------------------
// Tool definitions (advertised via tools/list)
// ---------------------------------------------------------------------------

const TOOL_DEFINITIONS = [
	{
		name: 'search_docs',
		description:
			'Full-text search across the grandocs mirror of MA Lighting documentation ' +
			'(grandMA3, grandMA2, dot2, utility, network). Returns ranked pages with ' +
			'canonical URL and raw-markdown (.md) twin URL.',
		inputSchema: {
			type: 'object',
			properties: {
				query: { type: 'string', description: 'Search query, e.g. "store a cue".' },
				product: {
					type: 'string',
					enum: [...VALID_PRODUCTS],
					description: 'Restrict to one product family.',
				},
				version: {
					type: 'string',
					description:
						'Restrict to a version dir segment, e.g. "2-4" for grandMA3 v2.4.',
				},
				lang: { type: 'string', description: 'Language code, e.g. "en".' },
				limit: {
					type: 'number',
					description: 'Max results (default 8).',
					default: 8,
				},
			},
			required: ['query'],
		},
	},
	{
		name: 'get_page',
		description:
			'Fetch the raw markdown of a single grandocs page by its site path ' +
			'(e.g. "grandma3/2-4/cue_store" or a full grandocs URL).',
		inputSchema: {
			type: 'object',
			properties: {
				path: {
					type: 'string',
					description:
						'Site-relative path without extension (e.g. "grandma3/2-4/cue_store"), ' +
						'or a full grandocs.samcarlton.com URL.',
				},
			},
			required: ['path'],
		},
	},
	{
		name: 'command_lookup',
		description:
			'Resolve a grandMA command / keyword to its reference page and return the raw ' +
			'markdown. Tries the key_<kw> / keyword_<kw> / cue_<kw> slug conventions, then ' +
			'falls back to a product-filtered search. Use this for exact command-syntax lookups.',
		inputSchema: {
			type: 'object',
			properties: {
				keyword: {
					type: 'string',
					description: 'Command or keyword, e.g. "store", "assign", "at", "matricks".',
				},
				product: {
					type: 'string',
					enum: [...VALID_PRODUCTS],
					description: 'Product family (default "grandma3").',
					default: 'grandma3',
				},
				version: {
					type: 'string',
					description: 'Version dir segment, e.g. "2-4". Defaults to the product\'s latest.',
				},
			},
			required: ['keyword'],
		},
	},
	{
		name: 'list_products_versions',
		description:
			'Return the product / version / language matrix of everything mirrored in grandocs, ' +
			'read from the crawl meta manifest.',
		inputSchema: { type: 'object', properties: {} },
	},
] as const

// ---------------------------------------------------------------------------
// Tool implementations
// ---------------------------------------------------------------------------

interface ToolText {
	content: { type: 'text'; text: string }[]
	isError?: boolean
}

function textResult(text: string, isError = false): ToolText {
	return { content: [{ type: 'text', text: text + ATTRIBUTION }], isError }
}

async function searchDocs(args: Record<string, unknown>): Promise<ToolText> {
	const query = String(args.query ?? '').trim()
	if (!query) return textResult('Error: `query` is required.', true)

	const product = typeof args.product === 'string' ? args.product : undefined
	const version = typeof args.version === 'string' ? args.version : undefined
	const lang = typeof args.lang === 'string' ? args.lang : undefined
	const limit =
		typeof args.limit === 'number' && args.limit > 0
			? Math.min(Math.floor(args.limit), 25)
			: 8

	const index = await getIndex()
	const results = index.search(query, {
		prefix: true,
		fuzzy: 0.2,
		boost: { title: 3, headings: 2 },
		filter: (r) => {
			const doc = r as unknown as StoredDoc
			if (product && doc.product !== product) return false
			if (version && doc.version !== version) return false
			if (lang && (doc.lang ?? 'en') !== lang) return false
			return true
		},
	})

	const hits: SearchHit[] = results
		.slice(0, limit)
		.map((r) => toHit(r as unknown as StoredDoc))

	if (hits.length === 0) {
		return textResult(`No grandocs pages matched "${query}".`)
	}

	const lines = hits.map(
		(h, i) =>
			`${i + 1}. ${h.title} — ${h.product}${h.version ? ` ${h.version}` : ''}\n` +
			`   page: ${h.url}\n` +
			`   markdown: ${h.mdUrl}\n` +
			(h.snippet ? `   ${h.snippet}\n` : ''),
	)
	return textResult(
		`Top ${hits.length} result(s) for "${query}":\n\n${lines.join('\n')}`,
	)
}

async function fetchPageMarkdown(path: string): Promise<string | null> {
	const res = await fetch(mdUrl(path), {
		cf: { cacheTtl: 3600, cacheEverything: true },
	})
	if (!res.ok) return null
	return await res.text()
}

async function getPage(args: Record<string, unknown>): Promise<ToolText> {
	const raw = String(args.path ?? '').trim()
	if (!raw) return textResult('Error: `path` is required.', true)
	const path = normalizePath(raw)
	const md = await fetchPageMarkdown(path)
	if (md === null) {
		return textResult(
			`No grandocs page found at "${path}". Try search_docs to find the right path.`,
			true,
		)
	}
	return textResult(`Source: ${pageUrl(path)}\n\n${md}`)
}

async function commandLookup(args: Record<string, unknown>): Promise<ToolText> {
	const keyword = String(args.keyword ?? '')
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9_]/g, '')
	if (!keyword) return textResult('Error: `keyword` is required.', true)

	const product = isValidProduct(
		typeof args.product === 'string' ? args.product : undefined,
	)
		? (args.product as Product)
		: 'grandma3'
	const version = typeof args.version === 'string' ? args.version : undefined

	// Default version dir for grandMA3 is the latest mirrored release.
	const verDir = version ?? (product === 'grandma3' ? '2-4' : undefined)
	const base = verDir ? `${product}/${verDir}` : product

	// 1) Try the known slug conventions directly (cheap, exact).
	const candidates = [
		`${base}/key_${keyword}`,
		`${base}/keyword_${keyword}`,
		`${base}/cue_${keyword}`,
		`${base}/${keyword}`,
	]
	for (const path of candidates) {
		const md = await fetchPageMarkdown(path)
		if (md !== null) {
			return textResult(`Source: ${pageUrl(path)}\n\n${md}`)
		}
	}

	// 2) Fall back to a product-filtered search and fetch the top hit's markdown.
	const index = await getIndex()
	const results = index.search(keyword, {
		prefix: true,
		fuzzy: 0.2,
		boost: { title: 3 },
		filter: (r) => {
			const doc = r as unknown as StoredDoc
			if (doc.product !== product) return false
			if (verDir && doc.version && doc.version !== verDir) return false
			return true
		},
	})
	const top = results[0] as unknown as StoredDoc | undefined
	if (top) {
		const md = await fetchPageMarkdown(top.path)
		if (md !== null) {
			return textResult(`Source: ${pageUrl(top.path)}\n\n${md}`)
		}
	}

	return textResult(
		`No reference page found for keyword "${keyword}" in ${product}` +
			`${verDir ? ` ${verDir}` : ''}. Try search_docs for a broader query.`,
		true,
	)
}

async function listProductsVersions(): Promise<ToolText> {
	const meta = await getMeta()
	return textResult(
		`grandocs product / version / language matrix:\n\n${JSON.stringify(meta, null, 2)}`,
	)
}

async function callTool(
	name: string,
	args: Record<string, unknown>,
): Promise<ToolText> {
	switch (name) {
		case 'search_docs':
			return searchDocs(args)
		case 'get_page':
			return getPage(args)
		case 'command_lookup':
			return commandLookup(args)
		case 'list_products_versions':
			return listProductsVersions()
		default:
			throw new RpcError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`)
	}
}

// ---------------------------------------------------------------------------
// JSON-RPC plumbing (MCP Streamable HTTP, stateless)
// ---------------------------------------------------------------------------

class RpcError extends Error {
	constructor(
		public code: number,
		message: string,
		public data?: unknown,
	) {
		super(message)
	}
}

interface JsonRpcRequest {
	jsonrpc: '2.0'
	id?: string | number | null
	method: string
	params?: Record<string, unknown>
}

function rpcResult(id: JsonRpcRequest['id'], result: unknown) {
	return { jsonrpc: '2.0' as const, id: id ?? null, result }
}

function rpcError(
	id: JsonRpcRequest['id'],
	code: number,
	message: string,
	data?: unknown,
) {
	return { jsonrpc: '2.0' as const, id: id ?? null, error: { code, message, data } }
}

async function handleRpc(req: JsonRpcRequest): Promise<unknown | null> {
	switch (req.method) {
		case 'initialize': {
			const requested =
				(req.params?.protocolVersion as string | undefined) ??
				LATEST_PROTOCOL_VERSION
			const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
				? requested
				: LATEST_PROTOCOL_VERSION
			return rpcResult(req.id, {
				protocolVersion,
				capabilities: { tools: { listChanged: false } },
				serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
				instructions:
					'Docs search for the grandocs unofficial MA Lighting mirror. Use search_docs ' +
					'to find pages, get_page for raw markdown, command_lookup for exact grandMA ' +
					'command syntax, list_products_versions for the coverage matrix. Default to ' +
					'grandMA3 v2.4 but match the user\'s actual console software version. Always ' +
					'cite the canonical help.malighting.com source URL for safety-relevant info.',
			})
		}

		case 'ping':
			return rpcResult(req.id, {})

		case 'tools/list':
			return rpcResult(req.id, { tools: TOOL_DEFINITIONS })

		case 'tools/call': {
			const name = req.params?.name as string | undefined
			const args = (req.params?.arguments ?? {}) as Record<string, unknown>
			if (!name) {
				return rpcError(req.id, ErrorCode.InvalidParams, 'Missing tool name')
			}
			try {
				const result = await callTool(name, args)
				return rpcResult(req.id, result)
			} catch (err) {
				if (err instanceof RpcError) {
					return rpcError(req.id, err.code, err.message, err.data)
				}
				// Tool runtime failures surface as an in-band error result, not a
				// protocol error, so the agent can read what went wrong.
				return rpcResult(
					req.id,
					textResult(
						`Error: ${err instanceof Error ? err.message : String(err)}`,
						true,
					),
				)
			}
		}

		default:
			// Notifications (method starts with "notifications/") carry no id and
			// expect no response.
			if (req.id === undefined || req.id === null) return null
			return rpcError(
				req.id,
				ErrorCode.MethodNotFound,
				`Method not found: ${req.method}`,
			)
	}
}

const JSON_HEADERS = { 'content-type': 'application/json' }

function corsHeaders(): Record<string, string> {
	return {
		'access-control-allow-origin': '*',
		'access-control-allow-methods': 'GET, POST, OPTIONS',
		'access-control-allow-headers': 'content-type, mcp-protocol-version, mcp-session-id',
		'access-control-expose-headers': 'mcp-session-id',
	}
}

export default {
	async fetch(request: Request): Promise<Response> {
		const url = new URL(request.url)

		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers: corsHeaders() })
		}

		// Friendly health/info root.
		if (url.pathname === '/' || url.pathname === '/health') {
			return new Response(
				JSON.stringify({
					name: SERVER_NAME,
					version: SERVER_VERSION,
					transport: 'streamable-http',
					endpoint: '/mcp',
					tools: TOOL_DEFINITIONS.map((t) => t.name),
					note: 'Unofficial MA Lighting docs mirror. POST JSON-RPC to /mcp.',
				}),
				{ headers: { ...JSON_HEADERS, ...corsHeaders() } },
			)
		}

		if (url.pathname !== '/mcp') {
			return new Response('Not found', { status: 404, headers: corsHeaders() })
		}

		// Streamable HTTP allows GET to open an SSE stream for server->client
		// messages. This stateless server has none, so politely decline.
		if (request.method === 'GET') {
			return new Response('Method Not Allowed', {
				status: 405,
				headers: { allow: 'POST, OPTIONS', ...corsHeaders() },
			})
		}

		if (request.method !== 'POST') {
			return new Response('Method Not Allowed', {
				status: 405,
				headers: { allow: 'POST, OPTIONS', ...corsHeaders() },
			})
		}

		let body: unknown
		try {
			body = await request.json()
		} catch {
			return new Response(
				JSON.stringify(rpcError(null, -32700, 'Parse error')),
				{ status: 400, headers: { ...JSON_HEADERS, ...corsHeaders() } },
			)
		}

		// MCP permits a single request object or a batch array.
		const isBatch = Array.isArray(body)
		const requests = (isBatch ? body : [body]) as JsonRpcRequest[]

		const responses: unknown[] = []
		for (const r of requests) {
			if (!r || r.jsonrpc !== '2.0' || typeof r.method !== 'string') {
				responses.push(rpcError((r as JsonRpcRequest)?.id ?? null, -32600, 'Invalid Request'))
				continue
			}
			const resp = await handleRpc(r)
			if (resp !== null) responses.push(resp)
		}

		// All-notifications batch (or single notification): 202 with no body.
		if (responses.length === 0) {
			return new Response(null, { status: 202, headers: corsHeaders() })
		}

		const payload = isBatch ? responses : responses[0]
		return new Response(JSON.stringify(payload), {
			headers: { ...JSON_HEADERS, ...corsHeaders() },
		})
	},
}
