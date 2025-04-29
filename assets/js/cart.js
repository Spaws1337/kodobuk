function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const count = getCart().length;
  const el = document.querySelector('.cart-count, .header__cart-count');
  if (el) el.textContent = count;
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
