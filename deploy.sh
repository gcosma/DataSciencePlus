#!/bin/bash
echo "🚀 Deploying site updates..."
npm run build
cp -r build/* .
git add .
git commit -m "Update site: $(date)"
git push origin main
echo "✅ Site updated! Check https://cosmos-ai.com/ in 2-3 minutes"
