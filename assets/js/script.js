// menu bar slide js function

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const close_menu = document.getElementById('close_menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('!left-0');
});

close_menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('!left-0');
});