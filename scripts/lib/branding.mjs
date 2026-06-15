/**
 * MA Lighting brand-asset detection.
 *
 * grandocs is an unofficial mirror, so MA Lighting's company logo and wordmark
 * are stripped from converted pages and never downloaded. This matches the MA
 * logo (`ma_logo…`, `icon_ma-logo…`), the MA wordmark (`ma_logo_schriftzug…`),
 * and the grey logo variant (`logo_3_grey…`).
 *
 * It deliberately does NOT match functional UI glyphs that merely contain the
 * word "logo", e.g. `icon_commandline-input_logo_v2-0` (the command-line input
 * icon), which are legitimate documentation content.
 */
export const BRAND_ASSET_RE = /(ma[_-]logo|logo_3_grey)/i

/** True if a URL or filename points at MA Lighting brand imagery. */
export function isBrandAsset(urlOrName) {
	return BRAND_ASSET_RE.test(String(urlOrName))
}
