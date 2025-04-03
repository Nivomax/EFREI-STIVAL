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

// ============================ formulaire ================================================

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#firstname, #lastname").forEach(input => {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[0-9]/g, '');
        });
    });
});

document.getElementById("age").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value !== "" && (this.value < 1 || this.value > 99)) {
        this.value = "";
    }
});

document.getElementById("phone").addEventListener("input", function () {
    // Supprime tout sauf les chiffres
    this.value = this.value.replace(/[^0-9]/g, '');

    // Limite la longueur à 15 chiffres max
    if (this.value.length > 15) {
        this.value = this.value.slice(0, 15);
    }
});

// ============================ fin formulaire ================================================
