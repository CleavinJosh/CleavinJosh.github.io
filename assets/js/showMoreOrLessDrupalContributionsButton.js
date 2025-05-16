const showMoreButton = document.getElementById('show-more-contributions');
const showLessButton = document.getElementById('show-less-contributions');
const drupalContributions = document.querySelectorAll('.drupal-contribution');

showMoreButton.addEventListener('click', () => {
  // Make all contributions visible
  drupalContributions.forEach(contribution => {
    contribution.classList.remove('hidden');
  });

  showMoreButton.classList.add('hidden');
  showLessButton.classList.remove('hidden');
});

showLessButton.addEventListener('click', () => {
  // Hide all contributions
  drupalContributions.forEach(contribution => {
    contribution.classList.add('hidden');
  });

  showLessButton.classList.add('hidden');
  showMoreButton.classList.remove('hidden');

  // Scroll to the "Show More" button
  showMoreButton.scrollIntoView({
    block: 'center',    // Align the button to the center of the screen
  });
});
