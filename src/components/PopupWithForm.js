import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
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
        super.setEventListeners();
        this._popup.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        this._submitForm(this._getInputValues());          
        });
    }

    close() {
        super.close();
        this._popup.querySelector('form').reset();
    }
    open() {
        this._inputList.forEach(input => input.dispatchEvent(new Event('input')));
        super.open();
    }
    
}