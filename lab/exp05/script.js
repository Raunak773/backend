const out = document.getElementById("out");
const log = (...a) => { console.log(...a); out.textContent += a.join(" ") + "\n"; };

// Arrays
const nums = [5, 3, 8, 1];
nums.push(10); nums.unshift(0); nums.pop();
log("Array:", nums, "sorted:", [...nums].sort((a, b) => a - b));
log("map:", nums.map(n => n * 2), "filter:", nums.filter(n => n > 3), "sum:", nums.reduce((a, b) => a + b, 0));

// Objects
const student = { name: "Raunak", age: 20, marks: { js: 90 },
  greet() { return "Hi, I am " + this.name; } };
student.city = "Mathura";
log(student.greet(), JSON.stringify(student));
for (const k in student) if (typeof student[k] !== "function") log(k, "=", JSON.stringify(student[k]));

// Functions
function add(a, b) { return a + b; }
const mul = function (a, b) { return a * b; };
const sq = x => x * x;
const counter = () => { let c = 0; return () => ++c; };
const next = counter();
log("add:", add(2, 3), "mul:", mul(2, 3), "sq:", sq(4), "closure:", next(), next());
function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }
log("5! =", factorial(5));
