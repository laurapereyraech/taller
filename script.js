document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('#optionsBtn');
    const menuPanel = document.querySelector('#optionsMenu');

    toggleButton.addEventListener('click', function() {
        // Cambiar la visibilidad del menú
        menuPanel.classList.toggle('d-none');
        menuPanel.classList.toggle('d-block');
    });
});
