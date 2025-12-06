document.querySelectorAll('.header__button-cta').forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".contact-me").scrollIntoView({ behavior: "smooth" });
    };
});

const menu = document.querySelector('.header__menu-hamburger')
const nav = document.querySelector('.header__nav')
menu.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
})
