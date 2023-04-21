import displayHome from "./home";
import displayMenu from "./menu";

function loadPage(){
    displayHome();
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach(button => button.addEventListener('click', setPage));
}

function setPage(e) {
    const currentActive = document.querySelector('.nav__item--active');
    currentActive.classList.remove('nav__item--active');
    e.target.classList.add('nav__item--active');
    const content = document.querySelector('.content');
    while (content.hasChildNodes()){
        content.firstChild.remove();
    }
    switch (e.target.dataset.page) {
        case 'home':
            displayHome();
            break;
        case 'menu':
            displayMenu();
            break;
        case 'contact':
            break;
        default:
            break;
    }
}

export default loadPage;