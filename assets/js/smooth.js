document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector('.about-text');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          text.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    observer.observe(text);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const infoTexts = document.querySelectorAll('.info-text');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    
    infoTexts.forEach(el => observer.observe(el));
  });
  