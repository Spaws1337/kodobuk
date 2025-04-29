let selectedSize = null;
const sizeButtons = document.querySelectorAll('.product__sizes button');

sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedSize = btn.textContent;
    sizeButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.querySelector('.product__buy').addEventListener('click', () => {
  if (!selectedSize) {
    showToast('Пожалуйста, выберите размер');
    return;
  }

  const product = {
    name: document.querySelector('.product__title').textContent,
    price: document.querySelector('.product__price').textContent,
    size: selectedSize,
    image: document.querySelector('.gallery__thumb').src, // можно уточнить
    link: window.location.pathname // текущая страница
  };
  

  addToCart(product);
  showToast('Товар добавлен в корзину!');
});
