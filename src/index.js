
import { homePage } from "./homePage/homePage"




function renderPage(page){
    const content = document.getElementById('content');
    content.innerHTML = page()
}
function app(){
    
}
homePage()
