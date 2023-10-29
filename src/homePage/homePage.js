import LOGO from './../assets/images/logo-sushi.png';
import SUSHI_FROM_RIGHT from './../assets/images/sushi1.png';

export function homePage() {
  const sushiLogo = new Image();
  sushiLogo.src = LOGO;
  sushiLogo.classList.add('logo');

  const sushiMainImg = new Image();
  sushiMainImg.src = SUSHI_FROM_RIGHT;
  sushiMainImg.classList.add('sushi_main_img');

  const homeTitle = document.createElement('h1');
  const homeWrap = document.createElement('div');
  const container = document.createElement('div');
  const description = document.createElement('div');
  const location = document.createElement('div');
  location.classList.add('location');
  homeWrap.classList.add('homePage');
  description.classList.add('description');
  homeTitle.classList.add('home_title')
  homeWrap.appendChild(homeTitle);
  homeWrap.appendChild(description);
  homeWrap.appendChild(location);
  description.textContent =
    'SavorTokyo: Authentic Tokyo flavors in your city, featuring sushi, sashimi, teriyaki, and more. Taste Tokyo today!';
  description.after(sushiMainImg);
  location.innerHTML = `<h2 class="location_title">Location</h2>
  <div class="location_text">123 Forest Drive, Forestville, Maine</div>`;
  homeTitle.innerHTML = `<div>Savor Tokyo</div>`;
  homeTitle.appendChild(sushiLogo);
  return homeWrap;
}
