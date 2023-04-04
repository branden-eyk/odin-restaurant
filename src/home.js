import Logo from './Odin-Face.jpg';

function displayHome (){
    const contentDiv = document.querySelector('.content');
    
    const header = document.createElement('div');
    header.classList.add('header');
    
    const logo = document.createElement('img');
    logo.src = Logo;
    logo.alt = 'Odin';
    logo.classList.add('header__logo');

    const title = document.createElement('h1');
    title.innerText = "Odin's Eatery of The Gods"
    title.classList.add('header__title');

    header.append(logo, title);
    contentDiv.append(header);
}

export default displayHome;