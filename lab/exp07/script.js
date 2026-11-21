const out = document.getElementById("out");
const log = (...a) => { console.log(...a); out.textContent += a.map(x => typeof x === "object" ? JSON.stringify(x) : x).join(" ") + "\n"; };

// let / const, template literals, default params
let n = 5; const name = "ES6";
const hello = (who = "World") => `Hello ${who}!`;
log(hello(), hello(name));

// destructuring, spread, rest
const [a, , c] = [1, 2, 3];
const { x, y = 20 } = { x: 10 };
const merged = { ...{ p: 1 }, ...{ q: 2 } };
const sum = (...nums) => nums.reduce((s, v) => s + v, 0);
log(a, c, x, y, merged, sum(1, 2, 3, 4));

// classes & inheritance
class Animal { constructor(n) { this.name = n; } speak() { return `${this.name} makes a sound`; } }
class Dog extends Animal { speak() { return `${super.speak()} - Woof`; } }
log(new Dog("Rex").speak());

// Map, Set, Symbol
const m = new Map([["a", 1]]); m.set("b", 2);
const s = new Set([1, 2, 2, 3]);
log([...m], [...s]);

// Promises, async/await
const delay = ms => new Promise(res => setTimeout(() => res("done after " + ms + "ms"), ms));
(async () => { log(await delay(300)); })();

// modules (import/export) & iterators
function* gen() { yield 1; yield 2; yield 3; }
for (const v of gen()) log("gen:", v);
