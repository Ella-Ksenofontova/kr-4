import { ITEMS, CATEGORIES, CATEGORIES_TRANSLATIONS } from "./data.js";
import { showMessage } from "./index.js";

let currentItems = ITEMS;

const openFiltersButton = document.getElementById("open-filters");
const closeFiltersButton = document.getElementById("close-filters");
const filtersBlock = document.querySelector(".filters-block");
const filtersBackdrop = document.querySelector(".filters-block-backdrop");

if (openFiltersButton && closeFiltersButton && filtersBlock && filtersBackdrop) {
    openFiltersButton.addEventListener("click", () => {
        filtersBlock.classList.add("filters-block_open");
    });

    closeFiltersButton.addEventListener("click", () => {
        filtersBlock.classList.remove("filters-block_open");
    });

    filtersBackdrop.addEventListener("click", () => {
        filtersBlock.classList.remove("filters-block_open");
    })
}

const productCards = document.querySelector(".product-cards");
const sortSelection = document.getElementById("sort-by");

if (productCards && sortSelection) {
    addItems(sortItems(currentItems, sortSelection.value));
}

const searchForm = document.getElementById("search-form");
const searchItemsInput = document.getElementById("search-items");
const filtersPanel = document.querySelector(".filters-panel");

if (searchForm && searchItemsInput && filtersPanel && sortSelection && productCards) {

}

if (sortSelection && productCards) {
    sortSelection.addEventListener("change", (e) => {
        currentItems = sortItems(currentItems, e.target.value);
        productCards.textContent = currentItems.length ? "" : "Ничего не найдено";
        addItems(currentItems);
    })
}

const priceFrom = document.getElementById("price-from");
const priceTo = document.getElementById("price-to");

if (priceFrom && priceTo) {
    priceFrom.value = Math.min(...ITEMS.map(i => i.price));
    priceTo.value = Math.max(...ITEMS.map(i => i.price));

    let priceFromValue = priceFrom.value;
    let priceToValue = priceTo.value;

    const regexp = /^[123456789]\d*$/;

    priceFrom.addEventListener("input", (e) => {
        if (!regexp.test(e.target.value) && e.target.value.length) {
            e.target.value = priceFromValue;
            return;
        }

        priceFromValue = e.target.value;
    });

    priceTo.addEventListener("input", (e) => {
        if (!regexp.test(e.target.value) && e.target.value.length) {
            e.target.value = priceToValue;
            return;
        }

        priceToValue = e.target.value;
    })
}

const ratingCheckbox = document.getElementById("good-rating");

const applyFiltersButton = document.getElementById("apply-filters");
if (filtersPanel && applyFiltersButton) {
    const categories = document.createElement("div");
    categories.classList.add("filters-panel__categories");
    applyFiltersButton.before(categories);

    for (let category of CATEGORIES) {
        const categoryGroup = document.createElement("div");
        categoryGroup.classList.add("filters-panel__category-group");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = CATEGORIES_TRANSLATIONS[category];
        checkbox.classList.add("filters-panel__checkbox");

        categoryGroup.appendChild(checkbox);

        const groupLabel = document.createElement("label");
        groupLabel.htmlFor = CATEGORIES_TRANSLATIONS[category];
        groupLabel.textContent = category;

        categoryGroup.appendChild(groupLabel);
        categories.appendChild(categoryGroup);
    }
}

if (filtersPanel && priceFrom && priceTo && ratingCheckbox && sortSelection && productCards && productCards && searchForm && searchItemsInput && filtersBlock) {
    const categoriesCheckboxes = filtersPanel.querySelectorAll(".filters-panel__categories .filters-panel__checkbox");

    filtersPanel.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkedCategories = Array.from(categoriesCheckboxes).filter(chx => chx.checked).map(chx => chx.id);
        currentItems = sortItems(ITEMS, sortSelection.value).filter(i => i.price >= priceFrom.value && i.price <= priceTo.value && (i.rating >= 4 || !ratingCheckbox.checked) && (!checkedCategories.length || i.categories.filter(c => checkedCategories.includes(c)).length) && (!searchItemsInput.value || i.title.toLocaleLowerCase().includes(searchItemsInput.value.toLocaleLowerCase())));

        productCards.textContent = "";
        addItems(currentItems);

        if (!currentItems.length) {
            const notFoundMessage = document.createElement("p");
            notFoundMessage.textContent = "Ничего не найдено";
            productCards.appendChild(notFoundMessage);
        }

        filtersBlock.classList.remove("filters-block_open");
    });

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkedCategories = Array.from(categoriesCheckboxes).filter(chx => chx.checked).map(chx => chx.id);
        currentItems = sortItems(ITEMS.filter(i => i.price >= priceFrom.value && i.price <= priceTo.value && (i.rating >= 4 || !ratingCheckbox.checked) && (!checkedCategories.length || i.categories.filter(c => checkedCategories.includes(c)).length) && (!searchItemsInput.value.trim() || i.title.toLocaleLowerCase().includes(searchItemsInput.value.toLocaleLowerCase()))), sortSelection.value);
        productCards.textContent = "";

        addItems(currentItems);
        if (!currentItems.length) {
            const notFoundMessage = document.createElement("p");
            notFoundMessage.textContent = "Ничего не найдено";
            productCards.appendChild(notFoundMessage);
        }
    });
}


function addItems(items) {
    for (let item of items) {
        const card = document.createElement("article");
        card.classList.add("product-card");

        if (item.badgeText) {
            const badge = document.createElement("div");
            badge.classList.add("badge", `badge_${item.badgeType}`);
            badge.textContent = item.badgeText;
            card.appendChild(badge);
        }

        const cardImage = document.createElement("img");
        cardImage.classList.add("product-card__image");
        cardImage.src = `./images/${item.image}`;
        cardImage.alt = item.title;

        card.appendChild(cardImage);

        const content = document.createElement("div");
        content.classList.add("product-card__content");
        card.appendChild(content);

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("product-card__title");
        cardTitle.textContent = item.title;

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("product-card__description");
        cardDescription.textContent = item.description;

        const wrapper = document.createElement("div");
        wrapper.classList.add("product-card__wrapper");

        const cardRating = document.createElement("p");
        cardRating.classList.add("product-card__rating");
        cardRating.textContent = `⭐ ${item.rating}`;

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("product-card__price");
        cardPrice.textContent = `${item.price} ₽`;

        const cardLink = document.createElement("a");
        cardLink.classList.add("button", "product-card__link");
        cardLink.href = `./product.html`;
        cardLink.textContent = "Подробнее";

        const cartButton = document.createElement("button");
        cartButton.classList.add("button", "product-card__add-to-cart-btn");
        cartButton.addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart-items"));
            if (!cartItems) {
                localStorage.setItem("cart-items", JSON.stringify([item]));
            } else if (!cartItems.map(i => i.id).includes(item.id)) {
                localStorage.setItem("cart-items", JSON.stringify(cartItems.concat(item)));
                showMessage("Товар добавлен в корзину");
            }
        });
        cartButton.textContent = item.isAvailable ? "В корзину" : "Нет в наличии";
        cartButton.disabled = !item.isAvailable;

        content.appendChild(cardTitle);
        content.appendChild(cardDescription);
        content.appendChild(wrapper);
        wrapper.appendChild(cardRating);
        wrapper.appendChild(cardPrice);
        card.appendChild(cardLink);
        card.appendChild(cartButton);

        productCards.appendChild(card);
    }
}

function sortItems(items, value) {
    switch (value) {
        case "price-asc":
            return items.sort((i1, i2) => i1.price < i2.price ? -1 : i1.price == i2.price ? 0 : 1);
        case "price-desc":
            return items.sort((i1, i2) => i1.price < i2.price ? 1 : i1.price == i2.price ? 0 : -1);
        case "rating-asc":
            return items.sort((i1, i2) => i1.rating < i2.rating ? -1 : i1.rating == i2.rating ? 0 : 1);
        case "rating-desc":
            return items.sort((i1, i2) => i1.rating < i2.rating ? 1 : i1.rating == i2.rating ? 0 : -1);
        default:
            return items;
    }
}