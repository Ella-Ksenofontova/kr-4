import { showMessage } from "./index.js";

let cartItems = JSON.parse(localStorage.getItem("cart-items"));
const cartContainer = document.querySelector(".cart-items");
const totalSum = document.querySelector(".cart-sum");
const orderLink = document.getElementById("order");

if (cartContainer && totalSum && orderLink) {
    addCartItems();
}

function addCartItems() {
    cartContainer.textContent = "";
    totalSum.textContent = "";
    if (!cartItems || cartItems.length === 0) {
        orderLink.hidden = true;
        const noItemsMessage = document.createElement("p");
        noItemsMessage.classList.add("cart-items__no-items-message");
        noItemsMessage.textContent = "В корзине сейчас нет товаров";
        cartContainer.appendChild(noItemsMessage);
    } else {
        orderLink.hidden = false;
        let total = 0;

        for (let cartItem of cartItems) {
            const cartWrapper = document.createElement("div");
            cartWrapper.classList.add("cart-wrapper");

            const cartImage = document.createElement("img");
            cartImage.classList.add("cart-wrapper__img");
            cartImage.src = `./images/${cartItem.image}`;
            cartImage.width = 200;
            cartWrapper.appendChild(cartImage);

            const itemInfo = document.createElement("div");
            cartWrapper.appendChild(itemInfo);

            const cartTitle = document.createElement("h2");
            cartTitle.classList.add("heading", "cart-wrapper__title");
            cartTitle.textContent = cartItem.title;
            itemInfo.appendChild(cartTitle);

            const cartPrice = document.createElement("p");
            cartPrice.classList.add("cart-wrapper__price");
            cartPrice.textContent = `${cartItem.price} руб.`;
            itemInfo.appendChild(cartPrice);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить";
            deleteButton.classList.add("button", "button_danger");
            deleteButton.addEventListener("click", () => {
                cartItems = cartItems.filter(i => i.id != cartItem.id);
                addCartItems(cartImage);
                localStorage.setItem("cart-items", JSON.stringify(cartItems));
                showMessage("Товар удалён из корзины");
            })
            itemInfo.appendChild(deleteButton);
            cartContainer.append(cartWrapper);

            total += cartItem.price;
        }

        totalSum.textContent = `Итого: ${total} руб.`;
    }
}