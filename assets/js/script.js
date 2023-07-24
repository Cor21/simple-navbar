const checkbtn = document.querySelector('.checkbtn');
const listNav = document.querySelector('.list-nav');
const headerActions = document.querySelector('.header_actions');
const searchBtn = document.querySelector('.search-btn');
const btnPrimary = document.querySelector('.btn-primary');

// Agregamos un evento al botón de hamburguesa para activar/desactivar el menú
checkbtn.addEventListener('click', function() {
    listNav.classList.toggle('active'); // Agregamos o quitamos la clase "active" al menú
    headerActions.classList.toggle('active'); // Agregamos o quitamos la clase "active" a los botones
});