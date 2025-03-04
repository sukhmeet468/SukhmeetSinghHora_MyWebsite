// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const header = document.querySelector("header");

    if (prefersDarkMode) {
        header.style.background = "rgba(20, 20, 20, 0.9)"; /* Dark mode version */
    }
});