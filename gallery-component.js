
const filterButtons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.image');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    images.forEach((image) => {
      if (filter === 'all' || image.classList.contains(filter)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});