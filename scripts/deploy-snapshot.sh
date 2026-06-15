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

# Cloudflare token. The project .env.local token (CLOUDFLARE_API_TOKEN) has
# Workers Scripts:Edit + Workers Routes:Edit + zone access — enough to deploy the
# worker AND attach the samcarlton.com custom domain — and is not IP-restricted.
# Both stages use it by default; override WORKER_TOKEN / DOMAIN_TOKEN to split them.
HERE="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_TOKEN="$(grep -E '^CLOUDFLARE_API_TOKEN=' "$HERE/.env.local" 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"'"'"'"' )"
WORKER_TOKEN="${WORKER_TOKEN:-$PROJECT_TOKEN}"
DOMAIN_TOKEN="${DOMAIN_TOKEN:-$PROJECT_TOKEN}"
# Attach the custom domain by default now that a capable token is available.
ATTACH_DOMAIN="${ATTACH_DOMAIN:-1}"

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

if [ "$ATTACH_DOMAIN" != "1" ]; then
	echo "▶ Stage 2: skipped (ATTACH_DOMAIN!=1). Worker is live at https://${NAME}.samcarlton.workers.dev"
	exit 0
fi
if [ -z "$DOMAIN_TOKEN" ]; then
	echo "▶ Stage 2: skipped — no token found in $HERE/.env.local (CLOUDFLARE_API_TOKEN)."
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
