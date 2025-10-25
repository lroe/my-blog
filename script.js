
// When any image is clicked
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.post img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.getElementById('image-overlay');
      const overlayImg = overlay.querySelector('img');
      overlayImg.src = img.src;
      overlay.classList.add('active');
    });
  });

  // Close overlay when clicked anywhere
  const overlay = document.getElementById('image-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }
});
