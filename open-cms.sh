#!/bin/bash
# Open Local CMS Editor in Chrome

PROJECT_DIR="/home/jeevankumar/Music/MyMansion"

cd "$PROJECT_DIR" || exit 1

echo "Starting CMS Server..."
node server.js &
SERVER_PID=$!

sleep 1

# Open Chrome to CMS
if command -v google-chrome &> /dev/null; then
    google-chrome "http://localhost:3001" &
elif command -v chrome &> /dev/null; then
    chrome "http://localhost:3001" &
else
    xdg-open "http://localhost:3001" &
fi

echo "CMS is open! Press Ctrl+C in this window when done."
wait $SERVER_PID
