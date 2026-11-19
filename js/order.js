import { showMessage } from "./index.js";

const orderForm = document.getElementById("order-form");
if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showMessage("Заказ оформлен!");
    })
}

const cartItems = JSON.parse(localStorage.getItem("cart-items"));
const itemsInOrder = document.querySelector(".items-in-order");

if (!cartItems || !cartItems.length) {
    const clientInfo = document.querySelector(".client-info");
    if (clientInfo) clientInfo.hidden = true;

    const noItemsMessage = document.createElement("p");
    noItemsMessage.textContent = "Сейчас в корзине нет товаров -  оформить заказ не получится";
    if (itemsInOrder) itemsInOrder.appendChild(noItemsMessage);
} else {
    let total = 0;
    const numberOfItemsHeading = document.getElementById("number-of-items");
    const totalPrice = document.querySelector(".order-wrapper__total");

    numberOfItemsHeading.textContent = `${cartItems.length} товар${getWordEnd(cartItems.length)}`;

    if (itemsInOrder && numberOfItemsHeading && totalPrice) {
        for (let item of cartItems) {
            const itemInOrder = document.createElement("div");
            itemInOrder.classList.add("item-in-order");

            const img = document.createElement("img");
            img.src = `../images/${item.image}`;
            img.classList.add("item-in-order__thumb");

            itemInOrder.appendChild(img);

            const itemName = document.createElement("h3");
            itemName.classList.add("item-in-order__name", "heading");
            itemName.textContent = item.title;

            itemInOrder.appendChild(itemName);

            const itemPrice = document.createElement("p");
            itemPrice.textContent = `${item.price} руб.`;
            itemPrice.classList.add(".item-in-order__price");

            itemInOrder.appendChild(itemPrice);

            itemsInOrder.appendChild(itemInOrder);
            total += item.price;
        }

        totalPrice.textContent = `Итого: ${total} руб.`
    }
}

function getWordEnd(n) {
    if (n % 100 == 11 || n % 100 == 12 || n % 100 == 13 || n % 100 == 14) return "ов";

    if (n % 10 == 1) return "";
    if (n % 10 == 2 || n % 10 == 3 || n % 10 == 4) return "а";
    return "ов";
}