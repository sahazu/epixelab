const burger = document.querySelector('.menuBurger__container'),
    header = document.querySelector('.menuBurger'),
    body = document.querySelector('body');

function menuBurgerClick(event) {
    header.classList.toggle('menuBurger__open');
    body.classList.toggle('notScroll')
}
burger.addEventListener('click', menuBurgerClick);