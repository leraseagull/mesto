export const selectorsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export {
  popupEditProfile, formEditProfile, popupEditProfileOpenButton, nameInput, jobInput, profileName,
  profileJob, popupAddElement, formAddElement, popupAddOpenButton, titleInput, linkInput,
  cardsContainer, templateCard, popupFullImage, popupImage, popupCaption, popupAction,
  buttonClose, initialCards, profileSelectors
}

const profileSelectors = {
profileName: '.profile__info-author',
profileJob: '.profile__info-subline'
}

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

  const popupEditProfile = document.querySelector("#popup-profile");
  const formEditProfile = document.querySelector("#form-profile");
  const popupEditProfileOpenButton = document.querySelector("#edit-profile");
  const nameInput = document.querySelector("#profile-name");
  const jobInput = document.querySelector("#profile-job");

  const profileName = document.querySelector(".profile__info-author");
  const profileJob = document.querySelector(".profile__info-subline");
  const popupAddElement = document.querySelector("#popup-element");
  const formAddElement = document.querySelector("#form-element");
  const popupAddOpenButton = document.querySelector("#add-element");
  const titleInput = document.querySelector("#element-title");
  const linkInput = document.querySelector("#element-image");
  const cardsContainer = document.querySelector(".cards");
  const templateCard = document.querySelector("#card");
  const popupFullImage = document.querySelector("#popup-full-image");
  const popupImage = document.querySelector(".popup-full-image__image");
  const popupCaption = document.querySelector(".popup-full-image__caption");
  const popupAction = document.querySelector('.popup_opened');
  const buttonClose = popup.querySelector('.popup__close');
