import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._popupForm = this._popup.querySelectorAll('.popup__input')
        this._inputValues = {};
        this._popupForm.forEach(input => {
            this._inputValues[input.name] = input.value;
        })
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues())
            this._closePopupKeydown()
        })
    }

    close() {
        this._popup.querySelector('.popup__input').reset();
        super.close();
    }
}