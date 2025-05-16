const drupalProfileButton = document.getElementById('drupal-profile-button');
const drupalCodeProfileButton = document.getElementById('drupal-code-profile-button');

drupalProfileButton.addEventListener('click', () => {
   window.open('https://www.drupal.org/u/cleavinjosh', '_blank');
});

drupalCodeProfileButton.addEventListener('click', () => {
   window.open('https://git.drupalcode.org/cleavinjosh', '_blank');
});
