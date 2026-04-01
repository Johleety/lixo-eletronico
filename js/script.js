
 //Fecha o menu mobile do Bootstrap se estiver aberto.
function fecharMenuMobile() {
    const menu = document.getElementById('navbarMenu');
    if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
}


// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const alvo = document.querySelector(this.getAttribute('href'));
        if (!alvo) return;

        e.preventDefault();
        alvo.scrollIntoView({ behavior: 'smooth' });
        fecharMenuMobile();
    });
});


// MENU — mudar cor ao rolar
const SCROLL_LIMITE = 50;
const COR_TOPO    = '#5ece9c';
const COR_ROLADO  = '#1a3a2a';

window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    if (!menu) return;
    menu.style.backgroundColor =
        window.scrollY > SCROLL_LIMITE ? COR_ROLADO : COR_TOPO;
});
