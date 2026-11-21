# Experiment 12: Programs to familiarize server-side scripting using Node.js

## Aim
To familiarize with server-side scripting using Node.js: modules, the file system and an HTTP server.

## Course Outcome
CO3

## Files
- `server.js`: HTTP server with routing and a JSON API
- `file-demo.js`: `fs`, `os` and `path` modules
- `math.js`: custom module
- `package.json`

## How to run
Requires Node.js (https://nodejs.org).

```bash
cd exp12
node file-demo.js     # file system demo
node server.js        # starts the server on port 3000
```

Then open http://localhost:3000, http://localhost:3000/about and http://localhost:3000/api/hello?name=Raunak.

## Concepts covered
- `require` and `module.exports`
- Built-in modules: `http`, `fs`, `os`, `path`, `url`
- Routing and status codes
- JSON responses
- Sync vs async file reading

## Expected output
The server returns an HTML home page, a text about page, a JSON greeting and a 404 for unknown routes. Stop it with Ctrl+C.
