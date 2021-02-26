const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupEditProfileOpenButton = document.querySelector(".profile__edit-button");
const popupEditProfileCloseButton = document.querySelector(".popup__close_edit");

const formEditProfile = document.querySelector(".popup__form-edit");
const nameInput = document.querySelector(".popup__input_type_user-name");
const jobInput = document.querySelector(".popup__input_type_user-job");
const popupEditProfileSaveButton = document.querySelector(".popup__button_save-edit");

const profileName = document.querySelector(".profile__info-author");
const profileJob = document.querySelector(".profile__info-subline");

const popupAdd = document.querySelector(".popup_add");
const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = document.querySelector(".popup__close-add");
const titleInput = document.querySelector(".popup__input_title");
const linkInput = document.querySelector(".popup__input_link");
const formAddElement = document.querySelector(".popup__add-form");
const popupAddSaveButton = document.querySelector(".popup__add-save");

const popupFullImage = document.querySelector(".popup_full-image");
const popupFullImageCloseButton = document.querySelector(".popup__close-full-image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");



function addInitialCards() {
    const htmlCards = initialCards.map(getCard);
    cardsContainer.append(...htmlCards);
}

const templateCard = document.querySelector(".template");
const cardsContainer = document.querySelector(".cards");

function getCard(item) {
    const newCard = templateCard.content.cloneNode(true);
    const cardTitle = newCard.querySelector(".card__title");
    const cardPhoto = newCard.querySelector(".card__photo");
    cardTitle.textContent = item.name;
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;

    function addLikeActive(evt) {
        evt.target.classList.toggle("card__like_active");
    }
    newCard.querySelector(".card__like").addEventListener("click", addLikeActive);
    const removeButton = newCard.querySelector(".card__delete");
    removeButton.addEventListener("click", deleteCardUser);
    const popupFullImageOpen = newCard.querySelector(".card__popup-image");
    popupFullImageOpen.addEventListener("click", openPopupFullImage);

    function openPopupFullImage() {
        popupImage.src = cardPhoto.src;
        popupImage.alt = cardPhoto.alt;
        popupCaption.textContent = cardTitle.textContent;
        openPopup(popupFullImage);
    }
    return newCard;
}
addInitialCards();

function openPopupEditProfile(evt) {
    // функция открытия попапа и добавление информации пользователя на страницу
    evt.preventDefault();
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupEditProfile);
}

function handlerFormEditProfile(evt) {    // сохраняем попап и передаем введеные значения в форме в html.
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

function addCardUser(evt) {//добавление карточки с помощью ввода названия и ссылки
    evt.preventDefault();
    const cardTitleUser = titleInput.value;
    const cardLinkUser = linkInput.value;
    const cardUser = getCard({ name: cardTitleUser, link: cardLinkUser });
    cardsContainer.prepend(cardUser);

    titleInput.value = "";
    linkInput.value = "";
}

function deleteCardUser(evt) {
    const eventTarget = evt.target;
    const targetCard = eventTarget.closest(".card");
    targetCard.remove();
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    closePopupClickOverlay(popup);
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

const closePopupClickOverlay = (popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target === popup) {
        closePopup(popup);
      }
    });
  }

function closePopupKeyEsc (evt, popup) {
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
};

popupFullImageCloseButton.addEventListener("click", function () {
    closePopup(popupFullImage);
});

// слушатели попапа редактирования профиля
popupEditProfileOpenButton.addEventListener("click", openPopupEditProfile);
popupEditProfileCloseButton.addEventListener("click", function () {
    closePopup(popupEditProfile);
});
formEditProfile.addEventListener("submit", (evt) => {
    handlerFormEditProfile(evt);
    closePopup(popupEditProfile);
});
//слушатели попапа добавления карточек
popupAddOpenButton.addEventListener("click", function () {
    openPopup(popupAdd);
});
popupAddCloseButton.addEventListener("click", function () {
    closePopup(popupAdd);
});
popupAddSaveButton.addEventListener("click", function () {
    closePopup(popupAdd);
});
formAddElement.addEventListener("submit", (evt) => {
    addCardUser(evt);
    closePopup(popupAdd);
});


//слушатели попапов закрытие при нажатии на клавишу "esc"
document.addEventListener('keydown', (evt) => {
    closePopupKeyEsc(evt, popupEditProfile)
});
document.addEventListener('keydown', (evt) => {
    closePopupKeyEsc(evt, popupAdd)
});
document.addEventListener('keydown', (evt) => {
    closePopupKeyEsc(evt, popupFullImage)
});
