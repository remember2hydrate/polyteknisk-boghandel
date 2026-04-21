/**
 * cart.js — Polyteknisk Boghandel
 * Cart state management: add, remove, update qty, render, totals
 */

/* =====================
   Cart State
   ===================== */
let cart = JSON.parse(localStorage.getItem('poly_cart') || '[]');

function saveCart() {
  localStorage.setItem('poly_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  renderCart();
  updateBadge();
  if (window.showToast) showToast(`📚 "${product.title}" tilføjet til kurven`);
}
window.addToCart = addToCart;

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
  updateBadge();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
  updateBadge();
}

function updateBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* =====================
   Render Cart Offcanvas
   ===================== */
function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total-price');
  const emptyEl = document.getElementById('cart-empty-msg');
  const footerEl = document.getElementById('cart-footer');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.title}"
           onerror="this.src='https://via.placeholder.com/60x80?text=Book'">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-author">${item.author}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2).replace('.', ',')} kr.</div>
        <div class="cart-qty">
          <button onclick="updateQty(${item.id}, -1)" title="Fewer">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, +1)" title="More">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})" title="Remove">×</button>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.textContent = getCartTotal().toFixed(2).replace('.', ',') + ' kr.';
  }
}

/* =====================
   Open Cart Offcanvas
   ===================== */
function openCart() {
  const cartOffcanvas = document.getElementById('cartOffcanvas');
  if (cartOffcanvas) {
    const oc = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
    oc.show();
  }
}
window.openCart = openCart;

/* =====================
   Checkout placeholder
   ===================== */
function checkout() {
  if (cart.length === 0) return;
  if (window.showToast) showToast('✅ Proceeding to checkout...');
  // Production: redirect to checkout page
}
window.checkout = checkout;

/* =====================
   Init
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateBadge();

  // Wire up cart icon buttons
  document.querySelectorAll('.open-cart-btn').forEach(btn => {
    btn.addEventListener('click', openCart);
  });
});
