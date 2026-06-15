#!/usr/bin/env bash
# Deploy the current dist/ as a frozen per-phase snapshot worker.
#
# Two-stage so a working URL never depends on custom-domain permissions:
#   1. Deploy worker + assets with a workers.dev route (token: WORKER_TOKEN).
#   2. Best-effort attach the samcarlton.com custom domain (token: DOMAIN_TOKEN).
#
# Usage: scripts/deploy-snapshot.sh <phase-number|prod>
set -uo pipefail

PHASE="${1:?usage: deploy-snapshot.sh <phase-number|prod>}"
if [ "$PHASE" = "prod" ]; then
	NAME="grandocs"
	HOST="grandocs.samcarlton.com"
else
	NAME="grandocs-phase-${PHASE}"
	HOST="grandocs-phase-${PHASE}.samcarlton.com"
fi
ACCOUNT="8d4ef8fe891f53e5658d3fdd5a4c7630"
ZONE="2601bf36012e64482012f58664e5ebf3"
CONFIG=".wrangler-snapshot.jsonc"

# Worker deploy token: needs Workers Scripts:Edit (vumbnail-white has it, unrestricted).
WORKER_TOKEN="${WORKER_TOKEN:-$(grep -E '^CLOUDFLARE_API_TOKEN=' ~/Code/vumbnail-white/.env.local 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"'"'"'"' )}"
# Custom-domain token: needs Workers Routes:Edit + DNS:Edit (wp has it, IP-restricted).
DOMAIN_TOKEN="${DOMAIN_TOKEN:-$(grep -E '^CLOUDFLARE_API_TOKEN=' ~/Code/wp/.env 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"'"'"'"' )}"

cat > "$CONFIG" <<EOF
{
	"name": "${NAME}",
	"compatibility_date": "2026-06-01",
	"workers_dev": true,
	"assets": { "directory": "./dist", "not_found_handling": "404-page" }
}
EOF

echo "▶ Stage 1: deploy ${NAME} (workers.dev)"
CLOUDFLARE_API_TOKEN="$WORKER_TOKEN" CLOUDFLARE_ACCOUNT_ID="$ACCOUNT" \
	npx wrangler deploy --config "$CONFIG"
STAGE1=$?
rm -f "$CONFIG"
if [ $STAGE1 -ne 0 ]; then
	echo "✘ worker deploy failed"; exit 1
fi
echo "✓ live: https://${NAME}.samcarlton.workers.dev"

if [ "${ATTACH_DOMAIN:-0}" != "1" ]; then
	echo "▶ Stage 2: skipped (set ATTACH_DOMAIN=1 with a DNS+Routes-capable, non-IP-locked token to attach ${HOST})."
	exit 0
fi
echo "▶ Stage 2: attach custom domain ${HOST} (best-effort)"
attached=0
for attempt in 1 2 3; do
	resp=$(curl -s --max-time 25 -X PUT \
		-H "Authorization: Bearer $DOMAIN_TOKEN" -H "Content-Type: application/json" \
		"https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/workers/domains" \
		--data "{\"zone_id\":\"${ZONE}\",\"hostname\":\"${HOST}\",\"service\":\"${NAME}\",\"environment\":\"production\"}")
	if echo "$resp" | grep -q '"success":true'; then
		attached=1; break
	fi
	sleep 2
done
if [ $attached -eq 1 ]; then
	echo "✓ custom domain live: https://${HOST}"
else
	echo "⚠ custom domain not attached (domain token lacks perms or IP-blocked)."
	echo "  Fallback URL: https://${NAME}.samcarlton.workers.dev"
fi
