import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class PortfolioHandler(SimpleHTTPRequestHandler):
    """Serve the GitHub Pages export at both root and /Blen-portfolio."""

    def translate_path(self, path: str) -> str:
        prefix = "/Blen-portfolio"
        if path == prefix:
            path = "/"
        elif path.startswith(f"{prefix}/"):
            path = path[len(prefix):]
        return super().translate_path(path)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "3000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), PortfolioHandler)
    print(f"Portfolio available on port {port}")
    server.serve_forever()
