#!/usr/bin/env bash
# Deploy the current dist/ as a frozen per-phase snapshot worker.
# Usage: scripts/deploy-snapshot.sh <phase-number>
set -euo pipefail

PHASE="${1:?usage: deploy-snapshot.sh <phase-number>}"
NAME="grandocs-phase-${PHASE}"
HOST="grandocs-phase-${PHASE}.samcarlton.com"
CONFIG=".wrangler-snapshot.jsonc"

cat > "$CONFIG" <<EOF
{
	"name": "${NAME}",
	"compatibility_date": "2026-06-01",
	"assets": { "directory": "./dist", "not_found_handling": "404-page" },
	"routes": [{ "pattern": "${HOST}", "custom_domain": true }]
}
EOF

npx wrangler deploy --config "$CONFIG"
rm -f "$CONFIG"
echo "Snapshot live: https://${HOST}"
