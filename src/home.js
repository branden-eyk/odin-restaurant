import Logo from './Odin-Face.jpg';
import './style.css';

function displayHome (){
    const contentDiv = document.querySelector('.content');
    contentDiv.append(createHeader(), createContent());
}

function createHeader(){
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
    return header;
}

function createContent(){
    const content = document.createElement('div');
    content.classList.add('content');

    const aboutUs = document.createElement('p');
    aboutUs.classList.add('content__subsection');
    aboutUs.innerText = "Dare you, mortal, eat of the nectar of the gods? Dost thou possess the hubris that thou thinkest thee worthy to eat of the food that sustaineth thy masters? Then tarry not and cometh thee to Odin's Eatery of The Gods. Where the game ceases never to be fresh, and the mead dost eternally overfloweth."; 

    const hours = document.createElement('div');
    hours.classList.add('content__subsection');
    const hoursSubtitle = document.createElement('h2');
    hoursSubtitle.classList.add('content__subtitle');
    hoursSubtitle.innerText = 'Hours';
    const hoursList = document.createElement('ul');
    hoursList.classList.add('content__list');
    const hoursArray = ['Sunnandæg: 8am - 8pm', 'Monandæg: 9am - 9pm', 'Tiwesdæg: 9am - 9pm', 'Wodnesdæg: 6am - 11pm', 'Ðunresdæg: 8am - 10pm', 'Frigedæg: 8am - 10pm', 'Sæternesdæg: 8am - 10pm'];
    for (const day of hoursArray) {
        const item = document.createElement('li');
        item.innerText = day;
        hoursList.appendChild(item);
    }
    hours.append(hoursSubtitle, hoursList);

    const location = document.createElement('div');
    location.classList.add('content__subsection');
    const locationSubtitle = document.createElement('h2');
    locationSubtitle.classList.add('content__subtitle');
    locationSubtitle.innerText = 'Location';
    const locationText = document.createElement('p');
    locationText.innerText = '246 Gungnir Ave., Valhalla, Asgard';
    location.append(locationSubtitle, locationText);
    
    content.append(aboutUs, hours, location);
    return content;
}


export default displayHome;