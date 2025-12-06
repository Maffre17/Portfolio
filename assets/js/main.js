document.querySelectorAll('.header__button-cta').forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
  };
});
const menu = document.querySelector('.header__menu-hamburger');
const nav = document.querySelector('.header__nav');

function isMobile() {
  return window.matchMedia("(max-width: 42.5rem)").matches;
}

menu.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});


function documentClickHandler(e) {
  if (!isMobile()) return;

  const clickForaDoNav = !nav.contains(e.target);
  const clickNoMenu = menu.contains(e.target);
  if (clickForaDoNav && !clickNoMenu) {
    nav.style.display = 'none';
  }
}

document.addEventListener('click', documentClickHandler);

window.addEventListener('resize', () => {
  if (!isMobile()) {
    nav.style.display = '';
  } else {
    nav.style.display = 'none';
  }
});
