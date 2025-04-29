// 👉 Сначала объявляем вспомогательные функции
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

function renderCart() {
  const container = document.getElementById('cart-items');
  const cart = getCart();
  container.innerHTML = '';

  const totalEl = document.getElementById('cart-total');
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p>Корзина пуста.</p>';
    totalEl.textContent = '';
    document.getElementById('cart-actions').style.display = 'none';
    return;
  }

  cart.forEach((item, index) => {
    const price = parseInt(item.price.replace(/[^\d]/g, '')); // убираем ₽ и пробелы
    total += price;

    const card = document.createElement('div');
    card.className = 'cart-card';
    card.innerHTML = `
      <a href="${item.link}">
        <img src="${item.image}" alt="${item.name}" class="cart-card__img">
      </a>
      <div class="cart-card__info">
        <a href="${item.link}" class="cart-card__name">${item.name}</a>
        <p>Размер: ${item.size}</p>
        <p class="cart-card__price">${item.price}</p>
      </div>
      <button class="cart-card__remove" onclick="removeItem(${index})">Удалить</button>
    `;
    container.appendChild(card);
  });

  totalEl.textContent = `Итого: ${total.toLocaleString('ru-RU')} ₽`;

  document.getElementById('cart-actions').style.display = 'block';
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem('cart');
  renderCart();
  updateCartCount();
}

function openModal() {
  document.getElementById('checkout-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// 👉 Теперь безопасно вешаем события
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartCount();

  const checkoutBtn = document.querySelector('.checkout-btn');
  const form = document.getElementById('checkout-form');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openModal);
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(this);
      const order = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        contact: data.get('contact'),
        address: data.get('address'),
        cart: getCart()
      };

      console.log('Заказ отправлен:', order);
      showToast('✅ Заказ успешно оформлен!');
      clearCart();
      closeModal();
    });
  }
});
