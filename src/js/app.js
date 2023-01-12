import toggleBurgerMenu from './toggleBurgerMenu';
import toggleSearchForm from './toggleSearchForm';

const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.menu-btn');
const searchIcon = document.querySelector('.nav-icons__search');
const searchForm = document.querySelector('.search-form');

menuBtn.addEventListener('click', (event) => toggleBurgerMenu(
  event,
  navMenu,
));

menuBtn.addEventListener('touchend', (event) => toggleBurgerMenu(
  event,
  navMenu,
));

searchIcon.addEventListener('click', (event) => toggleSearchForm(
  event,
  searchForm,
));

searchIcon.addEventListener('touchend', (event) => toggleSearchForm(
  event,
  searchForm,
));
