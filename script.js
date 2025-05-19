let currentIndex = 1;
const totalImages = 20;
const mainImage = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
  mainImage.src = `img${String(currentIndex).padStart(2, '0')}.jpg`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 1 ? totalImages : currentIndex - 1;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
  updateImage();
});
