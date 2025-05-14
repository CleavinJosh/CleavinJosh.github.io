const hamburger = document.getElementById('hamburger');
const closeButton = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const menuItems = document.querySelectorAll('.nav-item');

let isMenuOpen = false;

hamburger.addEventListener('click', () => {
  navMenu.classList.add('show');
  hamburger.classList.add('hide');
  closeButton.classList.remove('hide');
  isMenuOpen = true;
});

closeButton.addEventListener('click', () => {
  closeMenu();
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('click', (event) => {
  if (isMenuOpen && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    closeMenu();
  }
});

function closeMenu() {
  navMenu.classList.remove('show');
  closeButton.classList.add('hide');
  hamburger.classList.remove('hide');
  isMenuOpen = false;
}
