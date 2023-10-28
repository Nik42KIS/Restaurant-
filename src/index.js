import { contactPage } from './contactPage/contactPage';
import { homePage } from './homePage/homePage';
import { menuPage } from './menuPage.js/menuPage';
import './style.css';

function app() {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');
  //
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
  header.appendChild(homeLink);
  header.appendChild(menuLink);
  header.appendChild(contactLink);

  homeLink.textContent = 'HOME ';
  menuLink.textContent = 'MENU ';
  contactLink.textContent = 'CONTACT';

    homeLink.classList.add('linkHome', 'link')
    menuLink.classList.add('linkMenu', 'link')
    contactLink.classList.add('linkContact', 'link')

  function renderPage(page) {
    main.innerHTML = '';
    main.appendChild(page());
  }
  homeLink.addEventListener('click', () => {
    renderPage(homePage);
  });
  menuLink.addEventListener('click', () => {
    renderPage(menuPage);
  });
  contactLink.addEventListener('click', () => {
    renderPage(contactPage);
  });

  console.log('212122121212');
}
app();
// homePage()
