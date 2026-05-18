const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const navLinks = document.getElementById('sidebar-menu');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu(open) {
  if (open) {
    navLinks.classList.add('active');
    menuOverlay.classList.add('active');
    menuOpen.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  } else {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuOpen.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

menuOpen.addEventListener('click', () => toggleMenu(true));
menuClose.addEventListener('click', () => toggleMenu(false));
menuOverlay.addEventListener('click', () => toggleMenu(false));