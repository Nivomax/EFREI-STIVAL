// ============================ MENU =========================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        navbar.classList.toggle('active');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.menu-btn') && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menu.style.display = 'none';
        }
    });

    // ============================ FORMULAIRE =========================================

    document.querySelectorAll("#firstname, #lastname").forEach(input => {
        input.addEventListener("input", function () {
            this.value = this.value.replace(/[0-9]/g, '');
        });
    });

    const ageInput = document.getElementById("age");
    if (ageInput) {
        ageInput.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value !== "" && (this.value < 1 || this.value > 99)) {
                this.value = "";
            }
        });
    }

    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 15) {
                this.value = this.value.slice(0, 15);
            }
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi réel du formulaire

        // Affiche le message
        confirmationMessage.classList.remove('d-none');

        // Optionnel : Réinitialise le formulaire
        form.reset();

        // Optionnel : Masque le message après quelques secondes
        setTimeout(() => {
            confirmationMessage.classList.add('d-none');
        }, 10000);
    });
});