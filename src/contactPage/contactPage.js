export function contactPage(){

    
    const contactTitle = document.createElement('h1');
    const contactWrap = document.createElement('div');
    const container = document.createElement('div');
    contactWrap.appendChild(contactTitle)
    contactTitle.textContent = 'CONTACT'
    return contactWrap
}