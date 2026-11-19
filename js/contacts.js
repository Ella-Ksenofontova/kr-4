import { showMessage } from "./index.js";

const contactsForm = document.getElementById("contacts-form");
const contactUsDialog = document.getElementById("contact-us");
if (contactsForm && contactUsDialog) {
    const emailInput = document.getElementById("email");

    contactsForm.addEventListener("submit", event => {
        event.preventDefault();
        const regexp = /^\S+@\S+\.\S+$/;

        if (emailInput && regexp.test(emailInput.value)) {
            contactUsDialog.close();
            contactsForm.reset();
            showMessage("Ваша заявка успешно отправлена!")
        } else {
            emailInput.nextElementSibling.hidden = false;
        }
    });

    emailInput.addEventListener("input", () => emailInput.nextElementSibling.hidden = true);
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("faq__accordion-title")) {
        const hiddenPart = event.target.nextElementSibling;
        hiddenPart.classList.toggle("faq__accordion-hidden-part_open");
    }
});

const contactUsButton = document.getElementById("open-dialog");
const closeDialogButton = document.getElementById("close-dialog");

if (contactUsButton && contactUsDialog && closeDialogButton && contactsForm) {
    contactUsButton.addEventListener("click", () => {
        contactUsDialog.showModal();
    });

    closeDialogButton.addEventListener("click", () => {
        contactUsDialog.close();
        contactsForm.reset();
    });

    contactUsDialog.addEventListener("close", () => contactsForm.reset());
}