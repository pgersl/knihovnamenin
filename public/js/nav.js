const navToggleButton = document.getElementById('nav-toggle-button');
const navLinks = document.querySelector('.nav-links');
const navToggleIcon = document.getElementById('nav-toggle-icon');

navToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('toggled');
    navToggleIcon.classList.toggle('fa-bars');
    navToggleIcon.classList.toggle('fa-xmark');
})