from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import html

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Text Input Server</title>
</head>
<body>
    <h1>Simple Text Input Server</h1>
    <form action="/" method="post">
        <label for="text_input">Enter Text:</label><br>
        <input type="text" id="text_input" name="text_input"><br><br>
        <input type="submit" value="Submit">
    </form>
    <p>Entered text: <span id="display_text">{}</span></p>
</body>
</html>
"""

class SimpleServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        self.wfile.write(html_content.format("").encode('utf-8'))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        params = parse_qs(post_data)

        if 'text_input' in params:
            text_input = html.escape(params['text_input'][0])
        else:
            text_input = "error"

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

        self.wfile.write(html_content.format(text_input).encode('utf-8'))

def run_server(port=8080):
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleServer)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()