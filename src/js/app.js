import toggleBurgerMenu from './toggleBurgerMenu';
import toggleSearchForm from './toggleSearchForm';

const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.menu-btn');
const searchIcon = document.querySelector('.nav-icons__search');
const searchForm = document.querySelector('.search-form');

// touchstart
menuBtn.addEventListener('click', (event) => toggleBurgerMenu(
  event,
  navMenu,
));

searchIcon.addEventListener('click', (event) => toggleSearchForm(
  event,
  searchForm,
));
