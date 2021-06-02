export const address = 'https://mesto.nomoreparties.co/v1/cohort-23';
export const token = '3ba80848-84c8-48bd-a97a-d35ecfe36586';
export const page = document.querySelector('.page');

export const selectorsForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  labelSelector: '.popup__field',
  inputErrorSelector: '.popup__error',
  inputTypeErrorClass: '.popup__input_type_error',
  inputErrorActiveClass: 'popup__error_visible'
  
};

  // попап редактирования профиля
  export const popupEditProfile = document.querySelector("#popup-profile");
  export const formProfile = document.forms['form-profile'];
  export const nameInput = formProfile.elements['name'];
  export const jobInput = formProfile.elements['about'];
  export const buttonSubmitProfile = popupEditProfile.querySelector('.popup__button');
  // профиль кнопка открытия попапа
  export const profileEditButton = page.querySelector('.profile__edit-button');
  // Попап добавления карточки
  export const popupElement = page.querySelector('#popup-element');
  // кнопка сабмита попапа добавления карточки
  export const buttonSubmitElement = popupElement.querySelector('#element-submit');
  // кнопка открыть попап = добавить карточку
  export const elementButton = page.querySelector('#add-element');
  // кнопка открыть попап аватара
  export const buttonAvatarEdit = page.querySelector('.profile__avatar-act');
  // темплейт попапа редактирования фото аватара
  export const popupAvatarEdit = page.querySelector('#popup-avatar');
  export const buttonSubmitAvatarEdit = popupAvatarEdit.querySelector('#avatar-submit');
  export const popupAvatarInput = document.forms['avatar-photo'].elements['link'];
  