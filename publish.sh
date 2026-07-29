#!/bin/bash
# Publish Blog to GitHub Script (Pushes to both main and master)

PROJECT_DIR="/home/jeevankumar/Music/MyMansion"

echo "====================================="
echo "   Building & Publishing Blog...    "
echo "====================================="

cd "$PROJECT_DIR" || exit 1

echo "1. Building static production site..."
npm run build

echo "2. Adding changes to Git..."
git add .

echo "3. Committing updates..."
git commit -m "Publish update: $(date)" || true

echo "4. Pushing to GitHub (main & master)..."
git push origin main
git push origin main:master --force

if [ $? -eq 0 ]; then
    echo "-------------------------------------"
    echo " SUCCESS! Your blog is updated on GitHub!"
    echo "-------------------------------------"
    notify-send "Blog Publisher" "Successfully uploaded your blog to GitHub!" -i info 2>/dev/null || true
else
    echo "-------------------------------------"
    echo " ERROR publishing to GitHub. Please check network/ssh."
    echo "-------------------------------------"
    notify-send "Blog Publisher" "Failed to upload blog. Check terminal output." -i error 2>/dev/null || true
fi

read -p "Press Enter to close..."
