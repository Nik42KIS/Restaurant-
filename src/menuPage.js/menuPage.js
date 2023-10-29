
import IMG_FOR_MENU from './../assets/images/sushi-for-menu.jpg'
import IMG_FOR_MENU2 from './../assets/images/fish-roe.jpg'
import IMG_FOR_MENU3 from './../assets/images/salmon.jpg'


export function menuPage() {
  const menuTitle = document.createElement('h1');
  const menuWrap = document.createElement('div');
  const container = document.createElement('div');
  const menu = [];
  class Dish {
    constructor(name, price, img) {
      this.name = name;
      this.price = price + '$';
      this.img = img;
    }
  }
  menuWrap.classList.add('menuPage');
  menuTitle.classList.add('menu_title')
  menuWrap.appendChild(menuTitle);

  menuTitle.textContent = 'MENU';

    menu.push(new Dish('Sushi', 5, IMG_FOR_MENU ));
    menu.push(new Dish('Fish roe', 8, IMG_FOR_MENU2 ))
    menu.push(new Dish('Salmon sushi', 10, IMG_FOR_MENU3 ))
  
    menu.map((e) =>{
        const item = document.createElement('div')
        item.innerHTML = ` 
            <div class="menu_row">
                <h3 class="menu_item_title">${e.name}</h3>
                <div class="menu_item_price">price:${e.price}</div>
            </div>      
            <img src=${e.img} alt="" class="menu_item_img">
     
        `
        item.classList.add('item_wrap')
        menuWrap.appendChild(item)
    })
   


  return menuWrap;
}
