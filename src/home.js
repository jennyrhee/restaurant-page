import Hero from './img/pasta.jpg';
import './style.css';

function createDiv(content = null, className = null) {
  const div = document.createElement('div');
  if (className) div.classList.add(className);
  if (content) div.textContent = content;

  return div;
}

function createLink(name, href) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = name;

  return link;
}

function createNav(names, hrefs) {
  const nav = document.createElement('nav');
  names.forEach((name, i) => nav.appendChild(createLink(name, hrefs[i])));

  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  header.appendChild(createNav(
    ['Menu', 'Contact'],
    ['/menu/', '/contact/']
  ));
  header.appendChild(createDiv('Ristorante Sutton', 'logo'));
  header.appendChild(createNav(
    ['Reservations', 'Order Now'],
    ['/reserve/', '/order/']
  ));

  return header;
}

function createHero() {
  const hero = new Image();
  hero.src = Hero;
  hero.classList.add('hero');

  return hero;
}

function createDescription() {
  const container = createDiv(null, 'description-container');
  container.appendChild(createDiv(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
    mollit anim id est laborum.',
    'description'
  ));
  
  return container;
}

function initialize() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createHero());
  content.appendChild(createDescription());
}

export default initialize;