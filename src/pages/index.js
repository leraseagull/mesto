import "./index.css"; 
import Card from "../js/Card";
import { FormValidator } from "../js/FormValidator";
import PopupWithImage from "../js/PopupWithImage";
import PopupWithForm from "../js/PopupWithForm";
import Section from "../js/Section";
import UserInfo from "../js/UserInfo";
import { selectorsForm } from "../utils/constans";
import { popupEditProfile, formEditProfile, popupEditProfileOpenButton, nameInput, jobInput, profileName,
    profileJob, popupAddElement, formAddElement, popupAddOpenButton, titleInput, linkInput,
    cardsContainer, templateCard, popupFullImage, popupImage, popupCaption, popupAction,
    buttonClose, initialCards, profileSelectors } from "../utils/constans";
import { info } from "autoprefixer";

const profilePopupEdit = new PopupWithForm(popupEditProfile, (info) => userInfo.setUserInfo(info)
);
profilePopupEdit.setEventListeners();

const popupWithImage = new PopupWithImage(popupFullImage, popupImage, popupCaption)
PopupWithImage.setEventListeners();

const popupImageAdd = new PopupWithForm(popupFullImage, (info) => {
    const newImage = createCard(info)
    cardList.addImage(newImage)
});
popupImageAdd.setEventListeners();

const profileValidation = new FormValidator(selectorsForm, inputSelector)
const imageValidation = new FormValidator(selectorsForm, inputSelector)

function createCard(item) {
const newCard = new Card(item, templateCard, {
    handleCardClick: (name, link) => {
        popupWithImage.open(name, link)
    }
 })

 const newUserCard = newCard.generateCard();
 console.log(item)
 return newUserCard;
}

const cardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const newCard = createCard(cardItem)
        cardList.addItem(newCard);
    }
}, cardsContainer);
cardList.renderItems();

popupAddOpenButton.addEventListener('click', () => {
    popupImageAdd.open()
    imageValidation.clearValidation();
})

const userInfo = new UserInfo(profileSelectors)
popupEditProfileOpenButton.addEventListener('click', () => {
    profilePopupEdit.open();
    const infoCurr = userInfo.getUserInfo()
    nameInput.value = infoCurr.profileName
    jobInput.value = infoCurr.profileJob
    profileValidation.clearValidation();
})

imageValidation.enableValidation();
profileValidation.enableValidation();