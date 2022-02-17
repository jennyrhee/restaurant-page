import {createLink} from './helper.js';
import loadHome from './home.js';
import './style.css';

function createNav(names, hrefs) {
  const nav = document.createElement('nav');
  names.forEach((name, i) => nav.appendChild(
    createLink(name, hrefs[i])
  ));

  return nav;
}

function createHeader() {
  const header = document.createElement('header');
  header.appendChild(createNav(
    ['Menu', 'Contact'],
    ['#menu', '#contact']
  ));
  header.appendChild(createLink('Ristorante Sutton', '/', 'logo'));
  header.appendChild(createNav(
    ['Reservations', 'Order Now'],
    ['#reserve', '#order']
  ));

  return header;
}

function createBody() {
  const body = document.createElement('div');
  body.classList.add('body');

  return body;
}

function createFooter() {
  const footer = document.createElement('footer');

  const p = document.createElement('p');
  p.textContent = 'Created by '

  const icon = document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add('fa-github');

  const github = document.createElement('a');
  github.href = 'https://github.com/jennyrhee';
  github.textContent = ' jennyrhee'

  const span = document.createElement('span');
  span.textContent = ' | ';

  const repo = document.createElement('a');
  repo.href = 'https://github.com/jennyrhee/restaurant-page';
  repo.textContent = 'Repo';

  p.appendChild(icon);
  p.appendChild(github);
  p.appendChild(span);
  p.appendChild(repo);
  footer.appendChild(p);
  
  return footer;
}

function initialize() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createBody());
  content.appendChild(createFooter());
  loadHome();
}

initialize();