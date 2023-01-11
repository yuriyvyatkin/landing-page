export default function toggleBurgerMenu(event, navMenu) {
  let menuBtn = event.target;

  if (!menuBtn.classList.contains('menu-btn')) {
    menuBtn = menuBtn.closest('.menu-btn');
  }

  menuBtn.classList.toggle('menu-btn_opened');
  navMenu.classList.toggle('nav-menu_showed');
}
