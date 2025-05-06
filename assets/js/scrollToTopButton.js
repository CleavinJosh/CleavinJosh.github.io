const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
// Scroll to the top of the document smoothly
    window.scrollTo({
        top: 0,
    });
}
