import MANAGER_IMG from './../assets/images/japan-men.jpg'

export function contactPage(){

    
    const contactTitle = document.createElement('h1');
    const contactWrap = document.createElement('div');
    const contact = document.createElement('div');
    contactWrap.appendChild(contactTitle)
    contactWrap.appendChild(contact)

    contactWrap.classList.add('contactPage')
    contact.classList.add('contact')
    contactTitle.classList.add('contact_title')

    contact.innerHTML = `
            <div class="contact_row">
                <h3 class="contact_name">Li-Joy</h3>
                <div class="contact_position">Manager</div>
                <div class="contact_number">+222 (22) 22-222-22</div>
            </div>      
            <img src=${MANAGER_IMG} alt="" class="contact_img">
           
    `
    contactTitle.textContent = 'CONTACT'

    return contactWrap
}