const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOverlay = document.getElementById('burger-overlay');
const closeButton = document.querySelector('.burger-menu__close');
const burgerLinks = document.querySelectorAll('.burger-menu__link');
const body = document.body;

// Открытие меню
function openMenu() {
  burgerMenu.classList.add('active');
  burgerOverlay.classList.add('active');
  body.classList.add('lock-scroll');
}

// Закрытие меню
function closeMenu() {
  burgerMenu.classList.remove('active');
  burgerOverlay.classList.remove('active');
  body.classList.remove('lock-scroll');
}

burgerButton.addEventListener('click', (e) => {
  e.stopPropagation();
  openMenu();
});

closeButton.addEventListener('click', closeMenu);
burgerOverlay.addEventListener('click', closeMenu);

// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!burgerMenu.contains(target) && !burgerButton.contains(target)) {
    closeMenu();
  }
});

// Закрытие при клике по ссылке
burgerLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

