import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        })
        return formValues;
    }

    setEventListeners() {
        this._popup.addEventListener('submit', () => {
        this._submitForm(this._getInputValues());          
        });
        super.setEventListeners();
    }

    close() {
        this._popup.querySelector('form').reset();
        super.close();
    }
    open() {
        this._popup.querySelectorAll('.popup__input').forEach(input => input.dispatchEvent(new Event('input')));
        super.open();
    }
    
}