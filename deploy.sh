#!/bin/bash
echo "🚀 Deploying site updates..."
npm run build          # 1. Build first (creates fresh files)
cp -r build/* .         # 2. Copy build files to root
git add .               # 3. Add all changes to git
git commit -m "Update site: $(date)"  # 4. Commit changes
git push origin main    # 5. Push to GitHub
echo "✅ Site updated! Check https://cosmos-ai.com/ in 2-3 minutes"
