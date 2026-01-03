import os
import re
import shutil

lessons_dir = 'theapplefalls-code/public/lessons'
routes = []

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
                basename = os.path.splitext(file)[0].lower()
                chapter_match = re.search(r'chapter(\d+)', rel_path, re.IGNORECASE)
                chapter_num = chapter_match.group(1) if chapter_match else None
                if chapter_num:
                    if basename.isdigit() or basename == 'combined':
                        cool_url = f"/lesson/chapter{chapter_num}/{basename}"
                    else:
                        cool_url = f"/lesson/{basename}"
                else:
                    cool_url = f"/lesson/{basename}"
            
            routes.append(cool_url)

# Deployment target
deploy_dir = 'theapplefalls'
index_src = os.path.join(deploy_dir, 'index.html')

if not os.path.exists(index_src):
    print(f"Error: {index_src} not found. Build the project first.")
    exit(1)

for url in routes:
    # Remove leading slash and create path
    # e.g. /lesson/franklin -> theapplefalls/lesson/franklin/index.html
    dir_path = os.path.join(deploy_dir, url.lstrip('/'))
    os.makedirs(dir_path, exist_ok=True)
    shutil.copy2(index_src, os.path.join(dir_path, 'index.html'))
    print(f"Created {dir_path}/index.html")

print(f"SSG Routing applied to {len(routes)} routes.")
