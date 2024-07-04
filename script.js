// Animación del logo
window.onload = function() {
  const logo = document.querySelector('.logo');
  logo.classList.add('animate-logo');
}

// JavaScript para abrir y cerrar los modales
document.addEventListener('DOMContentLoaded', function() {
// Modal Quienes Somos
const modalQuienesSomos = document.getElementById('quienes-somos-modal');
const enlaceQuienesSomos = document.getElementById('enlace-quienes-somos');
const botonCerrarQuienesSomos = modalQuienesSomos.querySelector('.close-modal');

enlaceQuienesSomos.addEventListener('click', function(event) {
    event.preventDefault();
    modalQuienesSomos.style.display = 'block';
});

botonCerrarQuienesSomos.addEventListener('click', function() {
    modalQuienesSomos.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalQuienesSomos) {
        modalQuienesSomos.style.display = 'none';
    }
});
// Modal Contacto
const modalContacto = document.getElementById('contacto-modal');
const enlaceContacto = document.getElementById('enlace-contacto');
const botonCerrarContacto = modalContacto.querySelector('.close-modal');

enlaceContacto.addEventListener('click', function(event) {
    event.preventDefault();
    modalContacto.style.display = 'block';
});

botonCerrarContacto.addEventListener('click', function() {
    modalContacto.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalContacto) {
        modalContacto.style.display = 'none';
    }
});
});