let products = [], cart = 0;
const box = document.getElementById("products");

function render(list) {
  box.innerHTML = list.length ? list.map(p => `
    <div class="card"><h3>${p.name}</h3><p>₹${p.price}</p><button data-id="${p.id}">Add to cart</button></div>`).join("")
    : "No products found";
}
// AJAX: load data without reloading the page
const xhr = new XMLHttpRequest();
xhr.open("GET", "products.json");
xhr.onload = () => { if (xhr.status === 200) { products = JSON.parse(xhr.responseText); render(products); } else box.textContent = "Failed to load"; };
xhr.onerror = () => box.textContent = "Network error (run via a local server)";
xhr.send();

document.getElementById("search").addEventListener("input", e =>
  render(products.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))));
box.addEventListener("click", e => { if (e.target.tagName === "BUTTON") document.getElementById("cart").textContent = ++cart; });
