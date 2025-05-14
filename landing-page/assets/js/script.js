// Inicializa AOS
AOS.init({
    duration: 800,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'bg-dark', 'shadow');
    } else {
        navbar.classList.remove('navbar-scrolled', 'bg-dark', 'shadow');
    }
});

// Solucion Links del navbar, se generaba conflicto con los slider-section.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        // Cerrar el menú móvil si está abierto
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});