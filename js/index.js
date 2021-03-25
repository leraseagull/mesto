import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

// Попап редактировать профиль
const popupEditProfile = document.querySelector("#popup-profile");
const formEditProfile = document.querySelector("#form-profile");
const popupEditProfileOpenButton = document.querySelector("#edit-profile");
const nameInput = document.querySelector("#profile-name");
const jobInput = document.querySelector("#profile-job");

const profileName = document.querySelector(".profile__info-author");
const profileJob = document.querySelector(".profile__info-subline");

function openEditProfileForm() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditProfile);
}

function submitEditProfileForm(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

popupEditProfileOpenButton.addEventListener('click', openEditProfileForm);
formEditProfile.addEventListener('submit', submitEditProfileForm);

// попап добавить элемент
const popupAddElement = document.querySelector("#popup-element");
const formAddElement = document.querySelector("#form-element");
const popupAddOpenButton = document.querySelector("#add-element");
const titleInput = document.querySelector("#element-title");
const linkInput = document.querySelector("#element-image");
const cardsContainer = document.querySelector(".cards");

function openAddElement() {
    titleInput.value = '';
    linkInput.value = '';
    openPopup(popupAddElement);
}

function submitAddElement(event) {
    event.preventDefault();
    const item = new Array;
    item.name = titleInput.value;
    item.link = linkInput.value;
    cardsContainer.prepend(createCard(item));
    closePopup(popupAddElement);
}

popupAddOpenButton.addEventListener('click', openAddElement);
formAddElement.addEventListener('submit', submitAddElement);

// new element


const templateCard = document.querySelector("#card");

function createCard(item) {
    const card = new Card(item, templateCard, handleClickCard);
    const cardElement = card.addCard();
    return cardElement;
}

initialCards.forEach(function (item) {
    cardsContainer.prepend(createCard(item));
});

// open and close popup
function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupKeydown);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    popup.removeEventListener('keydown', closePopupKeydown);
    nameInput.value = "";
    jobInput.value = "";
    titleInput.value = "";
    linkInput.value = "";
}

function closePopupKeydown(event) {
    if (event.key === 'Escape') {
        const popupAction = document.querySelector('.popup_opened');
        closePopup(popupAction);
    }
}
const popupEventListeners = function () {
    const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((popup) => {
    const buttonClose = popup.querySelector('.popup__close');

    popup.addEventListener('click', function (evt) {
        if (!popup.firstElementChild.contains(evt.target) && popup.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
    buttonClose.addEventListener('click', function () {
        closePopup(popup);
    });
});
};


popupEventListeners();

// full image

const popupFullImage = document.querySelector("#popup-full-image");
const popupImage = document.querySelector(".popup-full-image__image");
const popupCaption = document.querySelector(".popup-full-image__caption");

function handleClickCard(name, link) {
    popupImage.src = link;
    popupCaption.textContent = name;
    openPopup(popupFullImage);
}


//validation
const selectorsForm = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const formList = Array.from(document.querySelectorAll(selectorsForm.formSelector));

const formVadation = (form) => {
    const formValidator = new FormValidator(selectorsForm, form);
    formValidator.enableValidation();
};

formList.forEach(form => {
    formVadation(form);
});