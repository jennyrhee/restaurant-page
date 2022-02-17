import './css/menu.css';
import {createDiv} from './helper.js';

function createMenuItem(name, description, price) {
  const container = createDiv(null, 'menu-item');
  container.appendChild(createDiv(name, 'name'))
  container.appendChild(createDiv(description, 'description'))
  container.appendChild(createDiv(price, 'price'))

  return container;
}

function createMenu() {
  const container = createDiv(null, 'menu-container');
  container.appendChild(createDiv('Menu', 'menu-title'));
  const menu = createDiv(null, 'menu');

  const apps = createDiv(null, 'menu-section');
  apps.appendChild(createDiv('Antipasti', 'section-title'));
  apps.appendChild(createMenuItem(
    'herb onion focaccia', 'extra virgin olive oil', 6
  ));
  apps.appendChild(createMenuItem(
    'fried cauliflower', 'bagna cauda, pepperoncini', 12
  ));
  apps.appendChild(createMenuItem(
    'meatballs', 'spicy tomato sauce', 14
  ));
  apps.appendChild(createMenuItem(
    'saffron arancini', 'scamorza, saffron risotto', 12
  ));
  menu.appendChild(apps);

  const pasta = createDiv(null, 'menu-section');
  pasta.appendChild(createDiv('Pasta', 'section-title'));
  pasta.appendChild(createMenuItem(
    'pappardelle', 'slow cooked short rib ragu, scallion, horseradish crema', 26
  ));
  pasta.appendChild(createMenuItem(
    'ravioli doppi', 'roasted squash, brown butter fonduta, sage butter, villa manodori balsamico', 25
  ));
  pasta.appendChild(createMenuItem(
    'risotto', 'riso carnaroli di acquerello, shellfish and octopus ragu, squid ink, calabrian chili, fennel', 29
  ));
  menu.appendChild(pasta);

  const secondi = createDiv(null, 'menu-section');
  secondi.appendChild(createDiv('Secondi', 'section-title'));
  secondi.appendChild(createMenuItem(
    'northern halibut', 'fennel passato, mixed citrus, chicories, olive tapenade', 37
  ));
  secondi.appendChild(createMenuItem(
    'pork loin', 'winter squash puree, roasted pear salad, pomegranate', 32
  ));
  secondi.appendChild(createMenuItem(
    'dry aged duck breast', 'radicchio agrodolce, apples, passato di sancrau, duck jus', 35
  ));
  menu.appendChild(secondi);

  container.appendChild(menu);
  return container;
}

function loadMenu() {
  const body = document.querySelector('.body');
  body.textContent = '';
  body.appendChild(createMenu());
}

export default loadMenu;