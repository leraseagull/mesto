
import "./pages/index.css";
import Card from "./components/Card";
import FormValidator from "./components/FormValidator";
import PopupWithImage from "./components/PopupWithImage";
import PopupWithForm from "./components/PopupWithForm";
import Section from "./components/Section";
import UserInfo from "./components/UserInfo";
import { selectorsForm, buttonAvatarEdit, 
    buttonSubmitProfile, popupAvatarEdit, 
    buttonSubmitAvatarEdit, address, token, 
    popupEditProfile, nameInput, jobInput, 
    profileEditButton, popupElement, buttonSubmitElement, 
    elementButton } from "./utils/constans";

import Api from "./components/Api";
import PopupWithButton from "./components/PopupWithButton";

let userId = 0;

const popupWithImage = new PopupWithImage('#popup-full-image');
popupWithImage.setEventListeners(); 
 

const createCard = (data) => {
const card = new Card(
    {
    item: data,
    selector: '.template-card',
    handleCardClick: () => {
        popupWithImage.open(card.name, card.link);
    },
    handleDeleteClick: () => {
        popupDeleteCard.open();
        api.setCurrentElement(card);
    },
    handleLikeClick: () => {
        api.setCurrentElement(card);

        if (card.likeOwner) {
            api.deleteLike()
            .then(response => {
                card.deleteLike(response.likes.length);
            }).catch(err => console.error(err));
        } else {
            api.putLike()
            .then(response => {
                card.toggleLike(response.likes.length);
            }).catch(err => console.error(err));
        }
    },
 }, userId);
 return card.createCard(data);
}

 const popupDeleteCard = new PopupWithButton({
    popupSelector: '#popup-place-delete-card',
    handleSubmit: () => {
        api.deleteCard()
        .then(() => {
            api.elem.deleteCard();
            popupDeleteCard.close();
    }).catch(err => console.error(err));
    }
 });
 popupDeleteCard.setEventListeners();

 const api = new Api({ address: address, token: token });

 Promise.all([api.getInitialCards(), api.getUserInfo()])
    .then(([initialCards, userData]) => {
        userId = userData._id;
        cardList.renderItems(initialCards);
        userInfo.setUserInfo(userData);
    }).catch(err => console.error(err));

    const cardList = new Section({
        renderer: (item) => {
            cardList.addItem(createCard(item));
        },
    containerSelector: '.cards__list'
    });

 
    const popupImageAdd = new PopupWithForm({
        popupSelector: '#popup-element', 
        submitForm: (formData) => {
            buttonSubmitElement.textContent = 'Сохранение...';
            api.addCard(formData)
            .then(dataCard => {
                cardList.addItem(createCard(dataCard));
                popupImageAdd.close();
            })
            .catch(err => console.error(err))
            .finally(() => {
                buttonSubmitElement.textContent = 'Создать';
            });
        }
    });
     
    popupImageAdd.setEventListeners();

    elementButton.addEventListener('click', () => {
        popupImageAdd.open();
        formValidatorElement.resetError();
    }); 

    const userInfo = new UserInfo({
        profileNameSelector: '.profile__info-author',
        profileJobSelector: '.profile__info-subline',
        profileAvatar: '.profile__avatar'
    }); 

    const popupProfileForm = new PopupWithForm(
        {
        popupSelector: '#popup-profile',
        submitForm: (formDataProfile) => {
        buttonSubmitProfile.textContent = 'Сохранение...';
        api.editUserInfo(formDataProfile)
        .then(() => {
            userInfo.setUserInfo(formDataProfile);
            popupProfileForm.close();
        })
        .catch((err => console.error(err)))
        .finally(() => {
            buttonSubmitProfile.textContent = 'Сохранить';
        });
    }
    }
    );
    popupProfileForm.setEventListeners();

 
    profileEditButton.addEventListener('click', () => {
        const userData = userInfo.getUserInfo();
        nameInput.value = userData.name;
        jobInput.value = userData.about;
        popupProfileForm.open();
    }); 

    const formAvatarEdit = new PopupWithForm({
        popupSelector: '#popup-avatar',
        submitForm: (formData) => {
            buttonSubmitAvatarEdit.textContent = 'Сохранение...';
            api.editAvatarPhoto(formData)
            .then(dataCard => {
                userInfo.setUserInfo(dataCard);
                formAvatarEdit.close();
            }).catch(err => console.error(err))
            .finally(() => {
                buttonSubmitAvatarEdit.textContent = 'Сохранить';
            });
        }
    });

    formAvatarEdit.setEventListeners();

    buttonAvatarEdit.addEventListener('click', () => {
        formAvatarEdit.open();
        formValidatorAvatarEdit.resetError();
    });


const formValidatorProfile = new FormValidator(selectorsForm, popupEditProfile);
const formValidatorElement = new FormValidator(selectorsForm, popupElement); 
const formValidatorAvatarEdit = new FormValidator(selectorsForm, popupAvatarEdit);
formValidatorElement.enableValidation();
formValidatorProfile.enableValidation(); 
formValidatorAvatarEdit.enableValidation();
