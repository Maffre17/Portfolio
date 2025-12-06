document.querySelectorAll('.header__button-cta').forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
    };
});

const menu = document.querySelector('.header__menu-hamburger');
const nav = document.querySelector('.header__nav');

// Toggle do menu
menu.addEventListener('click', (e) => {
    e.stopPropagation(); 
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Fechar ao clicar fora **somente em telas menores que 42.5rem**
document.addEventListener('click', (e) => {
    const isMobile = window.matchMedia("(max-width: 42.5rem)").matches;

    if (!isMobile) return; // Se não for mobile, não faz nada

    const clickForaDoNav = !nav.contains(e.target);
    const clickNoMenu = menu.contains(e.target);

    if (clickForaDoNav && !clickNoMenu) {
        nav.style.display = 'none';
    }
});
