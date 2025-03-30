// ============================ MENU =========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation de l'événement
        navbar.classList.toggle('active');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-btn') && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menu.style.display = 'none';
        }
    });
});
// ============================ fin MENU ================================================