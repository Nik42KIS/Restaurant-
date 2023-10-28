
import { homePage } from "./homePage/homePage"



function app(){
    const content = document.getElementById('content')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const footer = document.createElement('footer')
    const homeLink = document.createElement('a')
    const menuLink = document.createElement('a')
    const contactLink = document.createElement('a')
//          
content.appendChild(header)
    header.appendChild(homeLink)
    header.appendChild(menuLink)
    header.appendChild(contactLink)
homeLink.textContent = 'HOME'
menuLink.textContent = 'MENU'
contactLink.textContent = 'CONTACT'
    function renderPage(page){
        main.innerHTML = page()
    }
console.log('WORK');

}
app()
// homePage()
