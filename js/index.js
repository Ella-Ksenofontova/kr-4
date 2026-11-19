const openAsideButton = document.getElementById("open-aside");
const closeAsideButton = document.getElementById("close-aside");
const asideMenu = document.querySelector(".aside-menu");

if (openAsideButton && asideMenu && closeAsideButton) {
    openAsideButton.addEventListener(
        "click",
        () => {
            asideMenu.classList.add("open");
        }
    );

    closeAsideButton.addEventListener("click", () => {
        asideMenu.classList.remove("open");
    })
}

const toggleNavButton = document.getElementById("toggle-site-nav");
const siteNavList = document.querySelector(".site-nav__list");

if (toggleNavButton && siteNavList) {
    toggleNavButton.addEventListener("click", () => {
        siteNavList.classList.toggle("site-nav__list_open");
        toggleNavButton.classList.toggle("site-nav-opener_open");
    })
}

export function showMessage(text) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = text;

    document.querySelector(".main").appendChild(message);
    setTimeout(() => {
        message.classList.add("message_show");
        setTimeout(() => {
             message.classList.remove("message_show");
             setTimeout(() => message.remove(), 0);
        }, 5000);
    }, 500);
}