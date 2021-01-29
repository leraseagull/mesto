let name = document.querySelector(".profile__info-author");
let job = document.querySelector(".profile__info-subline");
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
let nameInput = document.querySelector(".popup__input_type_user-name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input_type_user-job"); // Воспользуйтесь инструментом .querySelector()
let submitClose = document.querySelector(".popup__button_save");

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);
submitClose.addEventListener("click", closeForm);

let popup = document.querySelector(".popup");
let buttonEditName = document.querySelector(".profile__edit-button");
let buttonClose = document.querySelector(".popup__close");

function openEditProfile() {
    popup.classList.add("popup_opened");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}

function closeForm() {
    popup.classList.remove("popup_opened");
}

buttonEditName.addEventListener("click", openEditProfile);
buttonClose.addEventListener("click", closeForm);
