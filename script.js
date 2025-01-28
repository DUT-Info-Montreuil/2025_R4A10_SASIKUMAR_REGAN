function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('toggle-menu');
// Ajouter un écouteur d'événements au bouton
    toggleButton.addEventListener('click', () => {
        // Basculer entre ajouter/supprimer la classe "active" au menu
        menu.classList.toggle('active');
    });

}

function getSvg(){
    const menu = document.getElementById('menu');

    let arrow_left = document.getElementById('arrow_left');
    let arrow_right = document.getElementById('arrow_right');

    if (menu.classList.contains('active')) {
        arrow_left.classList.add('active');
        arrow_right.classList.remove('active');
    } else {
        arrow_left.classList.remove('active');
        arrow_right.classList.add('active');
    }
}

