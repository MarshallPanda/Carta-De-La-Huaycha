document.addEventListener("DOMContentLoaded", () => {
  inicializarFiltros();
  inicializarCarrito();
});

// ----- FILTRO DE CATEGORÍAS -----
function inicializarFiltros() {
  filterMenu("All");
  document.querySelectorAll(".nav-pills li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelectorAll(".nav-pills li").forEach(li => li.classList.remove("active"));
      link.parentElement.classList.add("active");

      const category = link.getAttribute("href").substring(1);
      filterMenu(category === "All" ? "All" : category);
    });
  });
}

function filterMenu(category) {
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    const itemCategory = item.getAttribute("data-category");
    item.style.display = (category === "All" || itemCategory === category) ? "block" : "none";
  });
}

// ----- CARRITO DE COMPRAS -----
let cartItems = [];
let descuento = 0;
let cartTableBody, subtotalSpan, cartTotalSpan, cartCount, modal, openCartBtn, closeCartBtn;

function inicializarCarrito() {
  cartTableBody = document.getElementById("cart-items");
  subtotalSpan = document.getElementById("subtotal-amount");
  cartTotalSpan = document.getElementById("cart-total");
  cartCount = document.getElementById("cart-count");
  modal = document.getElementById("cart-modal");
  openCartBtn = document.getElementById("open-cart");
  closeCartBtn = document.getElementById("close-cart");

  openCartBtn.addEventListener("click", () => modal.style.display = "flex");
  closeCartBtn.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  document.querySelectorAll(".btn-order").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".menu.thumbnail");
      const name = card.querySelector("h3").textContent.trim();
      const priceText = card.querySelector(".price").textContent.trim().replace("S/", "").replace(",", ".");
      const price = parseFloat(priceText);

      const existing = cartItems.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      updateCart();
    });
  });

  const discountBtn = document.getElementById("discount-btn");
  if (discountBtn) {
    discountBtn.addEventListener("click", applyDiscount);
  }
}

function updateCart() {
  cartTableBody.innerHTML = "";
  let subtotal = 0;
  let totalItems = 0;

  cartItems.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;
    totalItems += item.quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>S/ ${item.price.toFixed(2)}</td>
      <td>
        <button onclick="changeQty(${index}, -1)">−</button>
        ${item.quantity}
        <button onclick="changeQty(${index}, 1)">+</button>
      </td>
      <td>S/ ${itemSubtotal.toFixed(2)}</td>
    `;
    cartTableBody.appendChild(row);
  });

  const total = subtotal - descuento;
  subtotalSpan.textContent = subtotal.toFixed(2);
  cartTotalSpan.textContent = total < 0 ? "0.00" : total.toFixed(2);
  cartCount.textContent = totalItems;
}

function changeQty(index, delta) {
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity < 1) {
    cartItems.splice(index, 1);
  }
  updateCart();
}

function applyDiscount() {
  const input = document.getElementById("discount").value;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (input.endsWith("%")) {
    const percent = parseFloat(input.replace("%", ""));
    descuento = subtotal * (percent / 100);
  } else {
    descuento = parseFloat(input);
  }
  if (isNaN(descuento)) descuento = 0;
  updateCart();
}
