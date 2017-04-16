'use strict';

const addItemButtons = document.querySelectorAll('button.add');
const cart = document.querySelector('#cart');
const cartTotal = cart.querySelector('#cart-total-price');
const cartCount = cart.querySelector('#cart-count');

function addItems() {
    let currentTotal = parseInt(cartTotal.innerHTML);
    let addedPrice = parseInt(this.dataset.price);
    cartTotal.innerHTML = currentTotal + addedPrice;

    let currentAmount = parseInt(cartCount.innerHTML);
    cartCount.innerHTML = currentAmount + 1;
}

for (let button of addItemButtons) {
    button.addEventListener('click', addItems);
}
