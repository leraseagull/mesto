export default class FormValidator {
  constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
  }

  _showInputError() {
    const errorElement = this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    this._inputElement.classList.add(this._selectors._inputTypeErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._selectors.inputErrorActiveClass);
  };

  _hideInputError() {
    const errorElement = this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);
    this._inputElement.classList.remove(this._selectors._inputTypeErrorClass);
    errorElement.classList.remove(this._selectors.inputErrorActiveClass);
    errorElement.textContent = "";
  };

  _formValidation(inputElement) {
    this._inputElement = inputElement;
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    })
  };


  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    }
  };

  _setEventListeners() {
    this._inputList = [...this._form.querySelectorAll(this._selectors.inputSelector)];
    this._buttonElement = this._form.querySelector(this._selectors.submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._formValidation(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }

  resetError() {
    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._hideInputError();
    });
  }
}
