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

function createContactItem(title, contents) {
  const container = createDiv(null, 'contact-item');
  container.appendChild(createDiv(title, 'title'));
  for (let i = 0; i < contents.length; i++) {
    container.appendChild(createDiv(contents[i], 'child'));
  }

  return container;
}

function createContact() {
  const container = createDiv(null, 'contact-container');
  container.setAttribute('id', 'contact');

  const itemsContainer = createDiv(null, 'container');
  itemsContainer.appendChild(createContactItem(
    'Location', ['Viale Esculapio, 00197', 'Rome, Italy']
  ));
  itemsContainer.appendChild(createContactItem(
    'Hours', [
      'Tuesday - Thursday', '5 pm - 10 pm',
      'Friday - Sunday', '5 pm - 11 pm', 
      'Closed Mondays'
    ]
  ));
  itemsContainer.appendChild(createContactItem(
    'Contact', ['(123) 456 - 7890', 'ristorante@sutton.com']
  ));
  container.appendChild(itemsContainer);

  const mapContainer = createDiv(null, 'map');
  mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.998314782753!2d12.480192306928855!3d41.91439494942881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60fdb661bf93%3A0xf727a9ea453d3690!2sViale%20Esculapio%2C%2000197%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1645204076580!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  container.appendChild(mapContainer);

  return container;
}

function loadHome() {
  const body = document.querySelector('.body');
  body.textContent = '';
  body.appendChild(createHero(Hero));
  body.appendChild(createDescription());
  body.appendChild(createHero(Dough));
  body.appendChild(createContact());
}

export default loadHome;