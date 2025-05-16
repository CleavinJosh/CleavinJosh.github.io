const showMoreButton = document.getElementById('show-more-contributions');
const showLessButton = document.getElementById('show-less-contributions');
const drupalContributions = document.querySelectorAll('.drupal-contribution');

showMoreButton.addEventListener('click', () => {
  drupalContributions.forEach(contribution => {
    contribution.classList.remove('drupal-contribution-hidden');
  });
  showMoreButton.classList.add('drupal-contribution-hidden');
  showLessButton.classList.remove('drupal-contribution-hidden');
});

showLessButton.addEventListener('click', () => {
  drupalContributions.forEach(contribution => {
      contribution.classList.add('drupal-contribution-hidden');
  });
});
