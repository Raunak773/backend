const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello from Node.js</h1><a href='/api/hello?name=Raunak'>API</a> | <a href='/about'>About</a>");
  } else if (pathname === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (pathname === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello " + (query.name || "Guest"), time: new Date() }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});
server.listen(3000, () => console.log("Server running at http://localhost:3000"));
