export function menuPage(){

    
    const menuTitle = document.createElement('h1');
    const menuWrap = document.createElement('div');
    const container = document.createElement('div');
    menuWrap.appendChild(menuTitle)
    menuTitle.textContent = 'MENU'
    return menuWrap
}