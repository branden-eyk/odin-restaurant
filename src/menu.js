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

    const bevSubtitle = document.createElement('h2');
    bevSubtitle.classList.add('pageContent__subtitle');
    bevSubtitle.innerText = "- Libations -";

    const meadItem = document.createElement('div');
    meadItem.classList.add('content__div', 'pageContent__subsection');
    const meadTitle = document.createElement('h3');
    meadTitle.classList.add('pageContent__subtitle');
    meadTitle.innerText = "Mead - $9";
    const meadText = document.createElement('p');
    meadText.innerText = 'Made from the finest of fermented Honey, our mead puts even the finest of mortal meaderies to shame. For not only will thee be rendered unable to stand other meads upon having a taste, thou shalt also be rendered both the wisest of scholars and the most talented of skalds. For our mead contains the blood of Kvasir, scion of Aesir and Vanir, whose wisdom is imparted upon consumption of his blood.';
    meadItem.append(meadTitle, meadText);

    const milkItem = document.createElement('div');
    milkItem.classList.add('content__div', 'pageContent__subsection');
    const milkTitle = document.createElement('h3');
    milkTitle.classList.add('pageContent__subtitle');
    milkTitle.innerText = "Milk - Your Life";
    const milkText = document.createElement('p');
    milkText.innerText = "At Odin's Eatery of the Gods, we do not suffer milkdrinkers drinking at our establishment. If ye seek to consume the drink of the weak and the cowardly, then ye should not be amongst the heroes in Valhalla and thy life is forfeit.";
    milkItem.append(milkTitle, milkText);

    const appSubtitle = document.createElement('h2');
    appSubtitle.classList.add('pageContent__subtitle');
    appSubtitle.innerText = "- Appetizers -";

    const yggItem = document.createElement('div');
    yggItem.classList.add('content__div', 'pageContent__subsection');
    const yggTitle = document.createElement('h3');
    yggTitle.classList.add('pageContent__subtitle');
    yggTitle.innerText = "Yggdrasil Leaf Salad - $5";
    const yggText = document.createElement('p');
    yggText.innerText = "An appetizer fit for a god. Served with crispy smoked Sæhrímnir bacon, aged parmesan cheese, and thy choice of dill ranch, blue cheese, or creamy caesar dressing.";
    yggItem.append(yggTitle, yggText);

    const smokiesItem = document.createElement('div');
    smokiesItem.classList.add('content__div', 'pageContent__subsection');
    const smokiesTitle = document.createElement('h3');
    smokiesTitle.classList.add('pageContent__subtitle');
    smokiesTitle.innerText = "Brown Sugar Smokies - $15";
    const smokiesText = document.createElement('p');
    smokiesText.innerText = "The perfect appetizer to share amongst thy fellow revellers. Small Sæhrímnir pork sausages wrapped in smoked Sæhrímnir bacon covered in a decadent brown sugar glaze.";
    smokiesItem.append(smokiesTitle, smokiesText);

    const entreeSubtitle = document.createElement('h2');
    entreeSubtitle.classList.add('pageContent__subtitle');
    entreeSubtitle.innerText = "- Entrées -";

    const pigItem = document.createElement('div');
    pigItem.classList.add('content__div', 'pageContent__subsection');
    const pigTitle = document.createElement('h3');
    pigTitle.classList.add('pageContent__subtitle');
    pigTitle.innerText = "Sæhrímnir - $20";
    const pigText = document.createElement('p');
    pigText.innerText = "He's a pig. He is killed and cooked every day, is fully whole again by evening, and is the only food source for all the einherjar in Valhalla. So he's the only entrée and he's a part of every food item on this menu. That's the joke. You're welcome.";
    pigItem.append(pigTitle, pigText);

    menu.append(bevSubtitle, meadItem, milkItem, appSubtitle, yggItem, smokiesItem, entreeSubtitle, pigItem);
    return menu;

}

export default displayMenu;