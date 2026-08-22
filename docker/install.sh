#!/bin/bash

set -e

echo "🚀 Starting deployment..."

docker compose pull
docker compose build
docker compose up -d

echo ""
echo "✅ Deployment completed."
echo ""
echo "Frontend: https://${FRONTEND_DOMAIN}"
echo "Backend : https://${BACKEND_DOMAIN}"
