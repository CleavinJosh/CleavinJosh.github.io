const hamburger = document.getElementById('hamburger');
const closeButton = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('show');
  hamburger.classList.add('hide');
  closeButton.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('show');
  closeButton.classList.add('hide');
  hamburger.classList.remove('hide');
});
