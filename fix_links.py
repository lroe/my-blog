import os
import re

# Configuration
APP_JSX_PATH = '/home/jeevan/Desktop/jeevan.life/my blog updated/theapplefalls-code/src/App.jsx'
LESSONS_DIR = '/home/jeevan/Desktop/jeevan.life/my blog updated/theapplefalls-code/public/lessons'
BASE_URL = '/theapplefalls'

def parse_app_jsx(file_path):
    """
    Parses App.jsx to extract route mappings.
    Returns a dictionary: { '/lesson/franklin': '/lessons/chapter1/Chapter1_Final/Franklin.html', ... }
    """
    mappings = {}
    try:
        with open(file_path, 'r') as f:
            content = f.read()
            # Regex to find <Route path="..." element={<LessonWrapper src="..." />} />
            # Matches: path="/lesson/franklin" ... src="/lessons/chapter1/Chapter1_Final/Franklin.html"
            matches = re.finditer(r'<Route\s+path=["\']([^"\']+)["\']\s+element=\{<LessonWrapper\s+src=["\']([^"\']+)["\']\s+/>\}', content)
            
            for match in matches:
                route_path = match.group(1)
                file_path = match.group(2)
                mappings[route_path] = file_path
                print(f"Mapped: {route_path} -> {file_path}")

        # Add manual mapping for root which isn't a LessonWrapper
        mappings['/'] = '/index.html'
        
    except Exception as e:
        print(f"Error parsing App.jsx: {e}")
    
    return mappings

def fix_links_in_files(directory, mappings):
    """
    Iterates through all HTML files in the directory and replaces broken links.
    """
    files_updated = 0
    links_fixed = 0

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, 'r') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Regex to find window.parent.location.href assignments
                    # Matches: window.parent.location.href = '/lesson/thales';
                    # Captures: /lesson/thales
                    
                    # This pattern matches single or double quotes, and optional semicolons
                    # It looks for assignments to window.location.href or window.parent.location.href
                    pattern = re.compile(r'(window(?:\.parent)?\.location\.href\s*=\s*)(["\'])([^"\']+)(["\'])')
                    
                    def replacement(match):
                        prefix = match.group(1)
                        quote = match.group(2)
                        current_link = match.group(3)
                        
                        target_file = mappings.get(current_link)
                        
                        if target_file:
                            # Construct the new absolute path
                            # If target_file starts with /, append to BASE_URL. 
                            # If it's relative? App.jsx seems to have absolute paths starting with /
                            new_link = f"{BASE_URL}{target_file}"
                            nonlocal links_fixed
                            links_fixed += 1
                            print(f"[{file}] Fixing: {current_link} -> {new_link}")
                            # Simplify to window.location.href to avoid iframe issues if any, 
                            # though the original code used window.parent. maybe keep it valid.
                            # The request is just to fix the link.
                            # Using window.location.href is safer for static pages unless in iframe.
                            # The original code used window.parent... lets stick to window.location.href for static
                            return f"window.location.href = '{new_link}'"
                        else:
                            # Link not found in mappings (maybe it's already correct or external?)
                            return match.group(0)

                    new_content = pattern.sub(replacement, content)
                    
                    # Also fix simple onclick="window.location.href='...'"
                    # This is narrower, mostly checking for known patterns
                    
                    if new_content != original_content:
                        with open(file_path, 'w') as f:
                            f.write(new_content)
                        files_updated += 1
                        
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

    print(f"\nSummary: Updated {files_updated} files, fixed {links_fixed} links.")

if __name__ == "__main__":
    print("Starting Link Fixer...")
    if not os.path.exists(APP_JSX_PATH):
        print(f"Error: App.jsx not found at {APP_JSX_PATH}")
    elif not os.path.exists(LESSONS_DIR):
        print(f"Error: Lessons directory not found at {LESSONS_DIR}")
    else:
        route_mappings = parse_app_jsx(APP_JSX_PATH)
        if route_mappings:
            fix_links_in_files(LESSONS_DIR, route_mappings)
        else:
            print("No mappings found. Exiting.")
