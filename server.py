# Modify server.py in WSL
import http.server
import socket
import ssl

# Listen on all interfaces
HOST = '0.0.0.0'  # Important: this allows external connections
PORT = 4443

handler = http.server.SimpleHTTPRequestHandler
httpd = http.server.HTTPServer((HOST, PORT), handler)

# Optional: SSL Configuration
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('cert.pem', 'key.pem')
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print(f"Serving on {HOST}:{PORT}")
httpd.serve_forever()