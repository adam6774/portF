document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('main-nav'); // Select using the ID we added

    if (hamburger && navMenu) { // Ensure elements exist
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active'); // Toggle hamburger animation
            navMenu.classList.toggle('is-active'); // Toggle nav visibility
        });

        // Close menu when a navigation link is clicked (for single-page sites)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                navMenu.classList.remove('is-active');
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

