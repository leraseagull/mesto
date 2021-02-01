let popup = document.querySelector(".popup");
let buttonEditName = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close");
let name = document.querySelector(".profile__info-author");
let job = document.querySelector(".profile__info-subline");
let formElement = document.querySelector(".popup__form"); 
let nameInput = document.querySelector(".popup__input_type_user-name"); 
let jobInput = document.querySelector(".popup__input_type_user-job");
let submitClose = document.querySelector(".popup__button_save");

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}


function openEditProfile() {
    popup.classList.add("popup_opened");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

function closeForm() {
    popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);
submitClose.addEventListener("click", closeForm);
buttonEditName.addEventListener("click", openEditProfile);
buttonClose.addEventListener("click", closeForm);