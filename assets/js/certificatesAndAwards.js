// Add click event listeners to the certificate titles to open the PDF files
document.getElementById('itn-certificate-title').addEventListener('click', () => {
  window.open('./assets/files/CCNA-_Introduction_to_Networks_certificate.pdf', '_blank')
});

document.getElementById('srwe-certificate-title').addEventListener('click', () => {
  window.open('./assets/files/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.pdf', '_blank')
});

document.getElementById('ensa-certificate-title').addEventListener('click', () => {
  window.open('./assets/files/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate.pdf', '_blank')
});

// Get the modal and its content
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');

// Get all images with the class 'card-image'
const images = document.querySelectorAll('.card-image');

// Loop through each image and add a click event listener
images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// When the close button (X) is clicked, hide the modal
document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = "none";
});

// Close the modal if clicked outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Close the modal if the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
