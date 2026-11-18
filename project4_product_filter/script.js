const products = [
  { name: "Wireless Mouse",    category: "Electronics", price: 799  },
  { name: "Bluetooth Speaker", category: "Electronics", price: 1999 },
  { name: "USB Cable",         category: "Electronics", price: 199  },
  { name: "Notebook Pack",     category: "Stationery",  price: 249  },
  { name: "Gel Pen Set",       category: "Stationery",  price: 99   },
  { name: "Running Shoes",     category: "Fashion",     price: 2499 },
  { name: "Cotton T-Shirt",    category: "Fashion",     price: 599  },
  { name: "Backpack",          category: "Fashion",     price: 1299 }
];

const searchBox = document.getElementById("search");
const catSelect = document.getElementById("category");
const grid      = document.getElementById("grid");
const count     = document.getElementById("count");

function showProducts() {
  const text = searchBox.value.toLowerCase().trim();
  const cat  = catSelect.value;

  // search and category filter work together
  const filtered = products.filter(function (p) {
    const nameMatch = p.name.toLowerCase().includes(text);
    const catMatch  = (cat === "All") || (p.category === cat);
    return nameMatch && catMatch;
  });

  if (filtered.length === 0) {
    count.textContent = "";
    grid.innerHTML = '<div id="none">No products found.</div>';
    return;
  }

  count.textContent = "Showing " + filtered.length + " of " + products.length + " products";

  grid.innerHTML = filtered.map(function (p) {
    return '<div class="product">' +
             '<h3>' + p.name + '</h3>' +
             '<span class="tag">' + p.category + '</span>' +
             '<div class="price">Rs. ' + p.price + '</div>' +
           '</div>';
  }).join("");
}

searchBox.addEventListener("input", showProducts);
catSelect.addEventListener("change", showProducts);

showProducts();
