// ===========================
// SCROLL SUAVE
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===========================
// MENU MOBILE - fechar ao clicar em link
// ===========================
const navLinks = document.querySelectorAll('.nav-link');
const menuAberto = document.getElementById('navbarMenu');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuAberto.classList.contains('show')) {
            menuAberto.classList.remove('show');
        }
    });
});

// ===========================
// MENU - mudar cor ao rolar a página
// ===========================
window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        menu.style.backgroundColor = '#1a3a2a';
    } else {
        menu.style.backgroundColor = '#2d6a4f';
    }
});