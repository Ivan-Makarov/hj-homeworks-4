    'use strict';

let contactList = document.querySelector('ul.contacts-list');

let contacts = JSON.parse(loadContacts());

let contactsHTML = ''
contacts.forEach(contact => {
    let itemHTML = '<li data-email="' + contact.email + '" data-phone="' + contact.phone + '">' + "<strong>" + contact.name + "</strong></li>";
    contactsHTML += itemHTML;
})

console.log(contactsHTML);

contactList.innerHTML = contactsHTML;
