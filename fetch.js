
  function display(htmlFile, targetElementId) {
    fetch(htmlFile)
      .then(response => response.text())
      .then(html => {
        document.getElementById(targetElementId).innerHTML = html;
      })
      .catch(error => {
        console.error('Failed to load section:', error);
      });
  }