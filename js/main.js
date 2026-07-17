$(document).ready(function() {
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    
    // Efecto suave al hacer scroll hacia anclas (si usas enlaces internos)
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Resta el alto del navbar
            }, 800);
        }
    });

    // Efecto FadeIn en elementos al cargar la página
    $('.card').hide().fadeIn(1500);
});