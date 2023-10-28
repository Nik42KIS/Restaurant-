export function homePage() {
  const homeTitle = document.createElement('h1');
  const homeWrap = document.createElement('div');
  const container = document.createElement('div');
  const description = document.createElement('div')
  homeWrap.classList.add('homePage')
  homeWrap.appendChild(homeTitle);
  homeWrap.appendChild(description);
  description.textContent = "SavorTokyo is a unique Japanese culinary destination where you can savor the flavors of Tokyo right in your city. Our menu features a variety of sushi, sashimi, teriyaki, and other dishes prepared using fresh ingredients and inspired by Tokyo street food. We offer an unparalleled experience that combines Japanese taste with contemporary style. At SavorTokyo, you'll discover the authentic taste of Tokyo in every bite."
  description.classList.add('description')
  homeTitle.textContent = 'SavorTokyo';
  return homeWrap;
}
