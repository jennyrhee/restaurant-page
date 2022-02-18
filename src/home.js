import {createDiv} from './helper.js';
import Hero from './img/pasta.jpg';
import Dough from './img/dough.jpg';

function createHero(img) {
  const hero = new Image();
  hero.src = img;
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

function loadHome() {
  const body = document.querySelector('.body');
  body.textContent = '';
  body.appendChild(createHero(Hero));
  body.appendChild(createDescription());
  body.appendChild(createHero(Dough));
}

export default loadHome;