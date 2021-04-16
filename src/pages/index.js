//пожалуйста, проверьте этот код, в предыдущем пути были не верные.

import "../pages/index.css";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import { initialCards, selectorsForm, keyClosePopup, page, popupEditProfile, formProfile, nameInput, jobInput, profileEditButton, popupElement, elementButton } from "../utils/constans";

const popupProfileForm = new PopupWithForm('#popup-profile',(formDataProfile) => {
    userInfo.setUserInfo(formDataProfile);
    popupProfileForm.close();
});
popupProfileForm.setEventListeners();

const popupWithImage = new PopupWithImage('#popup-full-image');
popupWithImage.setEventListeners(); 
 
const popupImageAdd = new PopupWithForm('#popup-element', (info) => {
    const newElement = createCard(info);
    cardList.addItem(newElement);
    popupImageAdd.close();
});
 
popupImageAdd.setEventListeners();
 
const formValidatorProfile = new FormValidator(selectorsForm, popupEditProfile);
const formValidatorElement = new FormValidator(selectorsForm, popupElement); 

function createCard(item) {
const cardElement = new Card(item, '#card', {
    handleCardClick: (name, link) => {
        popupWithImage.open(name, link)
    }
 })
 
 const cardElementNew = cardElement.generateCard();
 return cardElementNew;
}
 
const cardList = new Section({
    data: initialCards,
    renderer: (cardItem) => {
        const card = createCard(cardItem);
        cardList.addItem(card);
    }
}, '.cards');
 
cardList.renderItems();


elementButton.addEventListener('click', () => {
    popupImageAdd.open();
    formValidatorElement.resetError();
}); 
 
const userInfo = new UserInfo({
    profileNameSelector: '.profile__info-author',
    profileJobSelector: '.profile__info-subline'
}); 
 
profileEditButton.addEventListener('click', () => {
    popupProfileForm.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    popupProfileForm.open();
}); 

formValidatorElement.enableValidation();
formValidatorProfile.enableValidation(); 
