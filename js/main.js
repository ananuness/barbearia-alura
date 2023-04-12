const menuIcon = document.querySelector('.header__menu-icon');
const navContainer = document.querySelector('.nav-container');
const closeIcon = document.querySelector('.nav__close-icon');

const openMenu = () => navContainer.classList.toggle('nav-container--open');

const closeMenu = () => navContainer.classList.remove('nav-container--open');

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);