const thumbs = document.querySelectorAll('.gallery__thumb');
const images = document.querySelectorAll('.gallery__image');
const modelViewer = document.getElementById('model-viewer');
const galleryMain = document.getElementById('gallery-main');

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    const type = thumb.dataset.type;

    if (type === '3d') {
      // Скрыть изображения и показать модель
      galleryMain.style.display = 'none';
      modelViewer.style.display = 'block';
    } else {
      // Показать нужную картинку
      images.forEach(img => img.classList.remove('active'));
      images[thumb.dataset.index].classList.add('active');
      galleryMain.style.display = 'block';
      modelViewer.style.display = 'none';
    }
  });
});
