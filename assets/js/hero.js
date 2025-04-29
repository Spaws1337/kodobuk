// Обработка всех кнопок "Подробнее"
document.querySelectorAll('.hero__button').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#catalog').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // === Слайдер ===
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  // ВАЖНО: при загрузке сразу показать нужный слайд
  showSlide(currentSlide);
  
  // Кнопки "вперёд/назад"
  document.querySelector('.hero-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  
  document.querySelector('.hero-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  
  // Автосмена каждые 7 секунд
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 7000);
  
  