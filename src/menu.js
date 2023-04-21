function displayMenu(){
    const contentDiv = document.querySelector('.content');
    contentDiv.append(createHeader(), createMenu());
}

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header', 'content__div');

    const title = document.createElement('h1');
    title.innerText = "Our Victuals"
    title.classList.add('header__title');

    header.appendChild(title);
    return header;
}

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('pageContent');

    const beverages = document.createElement('div');
    beverages.classList.add('content__div');
    const bevTitle = document.createElement('h2');
    bevTitle.innerText = 'Libations';
    bevTitle.classList.add('pageContent__subtitle');
    const bevList = document.createElement('table');
    bevList.innerHTML = `
        <tr><td>Mead</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>$9</tr>
        <tr><td>Ale</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>$10</tr>
        <tr><td>Cider</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>$9</tr>
        <tr><td>Milk</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td><td>You're not welcome at this establishment</tr>
    `;
    beverages.append(bevTitle, bevList);

    menu.append(beverages);
    return menu;
}

export default displayMenu;