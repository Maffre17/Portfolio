document.querySelectorAll('.header__button-cta').forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
    };
});

const menu = document.querySelector('.header__menu-hamburger');
const nav = document.querySelector('.header__nav');

menu.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (e) => {
    const clickForaDoNav = !nav.contains(e.target);
    const clickNoMenu = menu.contains(e.target);

    if (clickForaDoNav && !clickNoMenu) {
        nav.style.display = 'none';
    }
});

