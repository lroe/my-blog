import http.server
import socketserver
import json
import os
import re
import cgi
import time
from urllib.parse import urlparse, parse_qs

PORT = 8004

class AdminHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path == '/list-articles':
            self.handle_list_articles()
        elif parsed_path.path == '/get-article':
            query = parse_qs(parsed_path.query)
            slug = query.get('slug', [None])[0]
            self.handle_get_article(slug)
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/submit':
            self.handle_submit()
        elif self.path == '/preview':
            self.handle_preview()
        elif self.path == '/upload':
            self.handle_upload()
        else:
            self.send_response(404)
            self.end_headers()

    def handle_list_articles(self):
        articles = []
        if os.path.exists('content'):
            for f in os.listdir('content'):
                if f.endswith('.md'):
                    slug = f[:-3]
                    # Try to get title and date from html if it exists
                    title = slug
                    date = ""
                    html_path = f'posts/{slug}.html'
                    if os.path.exists(html_path):
                        with open(html_path, 'r') as hf:
                            content = hf.read()
                            t_match = re.search(r'<title>(.*?) — Jeevan Kumar</title>', content)
                            if t_match:
                                title = t_match.group(1)
                            d_match = re.search(r'<span class="post-date">(.*?)</span>', content)
                            if d_match:
                                date = d_match.group(1)
                    
                    articles.append({'slug': slug, 'title': title, 'date': date})
        
        # Sort by date if possible, or name
        articles.sort(key=lambda x: x['slug'], reverse=True)
        
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(articles).encode())

    def handle_get_article(self, slug):
        if not slug:
            self.send_response(400)
            self.end_headers()
            return

        md_path = f'content/{slug}.md'
        if not os.path.exists(md_path):
            self.send_response(404)
            self.end_headers()
            return

        with open(md_path, 'r') as f:
            markdown = f.read()

        # Get title and date from HTML
        title = slug
        date = ""
        html_path = f'posts/{slug}.html'
        if os.path.exists(html_path):
            with open(html_path, 'r') as hf:
                content = hf.read()
                t_match = re.search(r'<title>(.*?) — Jeevan Kumar</title>', content)
                if t_match: title = t_match.group(1)
                d_match = re.search(r'<span class="post-date">(.*?)</span>', content)
                if d_match: date = d_match.group(1)

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({'title': title, 'slug': slug, 'date': date, 'markdown': markdown}).encode())

    def handle_submit(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        title = data.get('title')
        slug = data.get('slug')
        date = data.get('date')
        html_content = data.get('htmlContent')
        markdown = data.get('markdown')

        if not all([title, slug, date, html_content]):
            self.send_response(400)
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Missing fields'}).encode())
            return

        try:
            # 1. Save Markdown
            with open(f'content/{slug}.md', 'w') as f:
                f.write(markdown)

            # 2. Generate HTML from template
            with open('templates/post_template.html', 'r') as f:
                template = f.read()

            desc = (markdown[:150] + '..') if len(markdown) > 150 else markdown
            final_html = template.replace('{{title}}', title)
            final_html = final_html.replace('{{date}}', date)
            final_html = final_html.replace('{{content}}', html_content)
            final_html = final_html.replace('{{slug}}', slug)
            final_html = final_html.replace('{{description}}', desc.replace('"', '&quot;'))

            with open(f'posts/{slug}.html', 'w') as f:
                f.write(final_html)

            # 3. Update index.html only if it's a NEW post
            self.update_index_if_new(title, slug, date)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'success'}).encode())
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def handle_preview(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)

        title = data.get('title', 'Preview')
        date = data.get('date', 'Today')
        html_content = data.get('htmlContent', '')
        
        with open('templates/post_template.html', 'r') as f:
            template = f.read()

        final_html = template.replace('{{title}}', title)
        final_html = final_html.replace('{{date}}', date)
        final_html = final_html.replace('{{content}}', html_content)
        final_html = final_html.replace('{{slug}}', 'preview')
        final_html = final_html.replace('{{description}}', 'Preview mode')

        # Add <base> tag so relative links work in about:blank or other origins
        final_html = final_html.replace('<head>', f'<head>\n    <base href="http://localhost:{PORT}/">')

        final_html = final_html.replace('../assets/', 'assets/')
        final_html = final_html.replace('../css/', '/css/')
        final_html = final_html.replace('../js/', '/js/')
        final_html = final_html.replace('../index.html', '/index.html')

        self.send_response(200)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        self.wfile.write(final_html.encode())

    def handle_upload(self):
        ctype, pdict = cgi.parse_header(self.headers['Content-Type'])
        if ctype == 'multipart/form-data':
            pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
            fields = cgi.parse_multipart(self.rfile, pdict)
            
            # File content is usually bytes
            file_content = fields.get('image')[0]
            
            # Filename might be bytes or str depending on Python version/environment
            raw_filename = fields.get('filename')[0]
            if isinstance(raw_filename, bytes):
                filename = raw_filename.decode()
            else:
                filename = str(raw_filename)
            
            ext = os.path.splitext(filename)[1]
            safe_name = f"upload_{int(time.time())}{ext}"
            
            with open(f"assets/{safe_name}", 'wb') as f:
                f.write(file_content)
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'url': f'../assets/{safe_name}'}).encode())
        else:
            self.send_response(400)
            self.end_headers()

    def update_index_if_new(self, title, slug, date):
        with open('index.html', 'r') as f:
            content = f.read()

        # Check if already in index
        if f'href="posts/{slug}.html"' in content:
            # Maybe update the title/date if changed? For now just skip
            return

        new_item = f'''        <li class="post-list-item">
          <a href="posts/{slug}.html">{title}</a>
          <span class="post-date">{date}</span>
        </li>'''

        marker = '<ul class="post-list">'
        if marker in content:
            parts = content.split(marker)
            updated_content = parts[0] + marker + '\n' + new_item + parts[1]
            with open('index.html', 'w') as f:
                f.write(updated_content)

print(f"Starting admin server on http://localhost:{PORT}")
print(f"Open http://localhost:{PORT}/admin/ to write new articles.")
with socketserver.TCPServer(("", PORT), AdminHandler) as httpd:
    httpd.serve_forever()
