import "./pages/index.css"; 
import Card from "./components/Card"
import FormValidator from "./components/FormValidator";
import PopupWithImage from "./components/PopupWithImage";
import PopupWithForm from "./components/PopupWithForm";
import Section from "./components/Section";
import UserInfo from "./components/UserInfo";
import { initialCards, selectorsForm, keyClosePopup, page, popupEditProfile, formProfile, nameInput, jobInput, profileEditButton, popupElement, elementButton } from "./utils/constans";

const userInfo = new UserInfo({
    profileNameSelector: '.profile__info-author',
    profileJobSelector: '.profile__info-subline'
});
const popupProfileForm = new PopupWithForm('#popup-profile',
(formDataProfile) => {
    userInfo.setUserInfo(formDataProfile);
    popupProfileForm.close();
}
);
popupProfileForm.setEventListeners();

profileEditButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    popupProfileForm.open();
});


const popupWithImage = new PopupWithImage('#popup-full-image');
popupWithImage.setEventListeners();

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '#card',
        () => {
            popupWithImage.open(card._name, card._link);
        }
        );
        const cardElementNew = card.createCard();
        cardList.addItem(cardElementNew);
    }
},
'.cards'
);
cardList.renderItems();

const formValidatorProfile = new FormValidator(selectorsForm, popupEditProfile);
const formValidatorElement = new FormValidator(selectorsForm, popupElement);
formValidatorElement.enableValidation();
formValidatorProfile.enableValidation();

const popupElementForm = new PopupWithForm('#popup-element',
 (formData) => {
    console.log(formData);
     const cardElement = new Card(formData,
        '#card',
        () => {
            popupWithImage.open(cardElement._name, cardElement._link);
        });
        const cardElementNew = cardElement.createCard();
        cardList.addItem(cardElementNew);
        popupElementForm.close();
    }
);


popupElementForm.setEventListeners();
elementButton.addEventListener('click', () => {
   popupElementForm.open();
     formValidatorElement.resetError();
 });