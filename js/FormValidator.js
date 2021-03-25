export class FormValidator {
    constructor(selectors, form) {
      this.form = form;
      this.selectors = selectors;
    }

    _checkInputValidity = (formElement, inputElement) => { 
        if (!inputElement.validity.valid) {
          this._showInputError(formElement, inputElement, inputElement.validationMessage, this.selectors);
        } else {
            this._hideInputError(formElement, inputElement, this.selectors);
        }
    };


    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.selectors.inputErrorClass);
        errorElement.textContent = errorMessage.split('.')[0] + '.';
        errorElement.classList.add(this.selectors.errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.selectors.inputErrorClass);
        errorElement.classList.remove(this.selectors.errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this.selectors.inactiveButtonClass);
            buttonElement.setAttribute("disabled", "disabled");
        } else {
            buttonElement.classList.remove(this.selectors.inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    };


    _setEventListeners(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this.selectors.inputSelector));
        const buttonElement = formElement.querySelector(this.selectors.submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement, this.selectors);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, this.selectors);
                this._toggleButtonState(inputList, buttonElement, this.selectors);
            });
        });
    };

    enableValidation() { 
    this._setEventListeners(this.form); 
    };
}