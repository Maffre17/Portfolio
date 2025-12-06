const menu = document.querySelector('.header__menu-hamburger');
const nav = document.querySelector('.header__nav');

function isMobile() {
  return window.matchMedia("(max-width: 42.5rem)").matches;
}

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Listener para fechar ao clicar fora — mas só quando for mobile
function documentClickHandler(e) {
  if (!isMobile()) return;

  const clickForaDoNav = !nav.contains(e.target);
  const clickNoMenu = menu.contains(e.target);
  if (clickForaDoNav && !clickNoMenu) {
    nav.style.display = 'none';
  }
}

document.addEventListener('click', documentClickHandler);

// Opcional — se quiser que ao redimensionar a janela também remova o listener, ou force o nav a abrir/fechar conforme desktop/mobile
window.addEventListener('resize', () => {
  // Se passou para desktop, garanta nav visível ou estilo normal
  if (!isMobile()) {
    nav.style.display = ''; // ou 'flex', dependendo do teu CSS
  } else {
    nav.style.display = 'none';
  }
});
