import os
import re
import json

lessons_dir = 'theapplefalls-code/public/lessons'
routes = []

# Map of common files to specific cool URLs for better consistency if needed
manual_overrides = {
    '/lessons/sandbox/circuit_simulator.html': '/sandbox',
}

for root, dirs, files in os.walk(lessons_dir):
    for file in files:
        if file.endswith('.html'):
            full_path = os.path.join(root, file)
            rel_path = '/' + os.path.relpath(full_path, 'theapplefalls-code/public')
            
            if rel_path in manual_overrides:
                cool_url = manual_overrides[rel_path]
            else:
                # Create a "cool" URL
                basename = os.path.splitext(file)[0].lower()
                
                # Extract chapter from path
                chapter_match = re.search(r'chapter(\d+)', rel_path, re.IGNORECASE)
                chapter_num = chapter_match.group(1) if chapter_match else None
                
                if chapter_num:
                    if basename.isdigit() or basename == 'combined':
                        cool_url = f"/lesson/chapter{chapter_num}/{basename}"
                    else:
                        cool_url = f"/lesson/{basename}"
                else:
                    cool_url = f"/lesson/{basename}"
            
            # The iframe src needs to be absolute-path compatible with the deployment
            src_path = f"/theapplefalls{rel_path}"
            
            routes.append({
                'src': src_path,
                'url': cool_url,
                'file': full_path
            })

# Sort routes by URL for clean App.jsx
routes.sort(key=lambda x: x['url'])

print("--- APP_ROUTES ---")
for r in routes:
    print(f'        <Route path="{r["url"]}" element={{<LessonWrapper src="{r["src"]}" />}} />')
