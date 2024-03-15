import http.server
import socketserver

# Set the port number
PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    # Override the default behavior to set the default file to 
    def do_GET(self):
        if self.path == '/':
            self.path = '/assignment_4.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyHttpRequestHandler

# Set up the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server started at localhost:" + str(PORT))
    # Start the server
    httpd.serve_forever()
