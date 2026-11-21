const fs = require("fs"), os = require("os"), path = require("path");
const math = require("./math");
const file = path.join(__dirname, "note.txt");
fs.writeFileSync(file, "Hello from Node.js\n");
fs.appendFileSync(file, "Appended line\n");
console.log("File content:\n" + fs.readFileSync(file, "utf8"));
console.log("add(2,3) =", math.add(2, 3), "| platform:", os.platform());
fs.readFile(file, "utf8", (err, d) => console.log(err ? err : "Async read lines: " + d.split("\n").length));
