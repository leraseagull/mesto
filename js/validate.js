const showInputError = (inputElement, errorMessage, selectors) => { 
    const errorElement = inputElement.closest(selectors.labelSelector).querySelector(selectors.inputErrorClass);
    inputElement.classList.add(selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.inputErrorTypeActive);
};

const hideInputError = (inputElement, selectors) => { 
    const errorElement = formElement.closest(selectors.labelSelector).querySelector(selectors.inputSelector);
    inputElement.classList.remove(selectors.inputErrorClass);
    errorElement.classList.remove(selectors.inputErrorTypeActive);
    errorElement.textContent = '';
};

const checkInputValidity = (inputElement, selectors) => { 
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.validationMessage, selectors);
    } else {
        hideInputError(inputElement, selectors);
    }
};

const hasInvalidInput = (inputList) => { 
    return inputList.some((inputElement) => { 
    return !inputElement.validity.valid;
    }); 
};

const toggleButtonState = (inputList, buttonElement, selectors) => { 
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(selectors.inactiveButtonClass); 
    } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(selectors.inactiveButtonClass);
    }
};

const setEventListeners = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector)); 
    const buttonElement = formElement.querySelector(selectors.submitButtonSelector); 
        toggleButtonState(inputList, buttonElement, selectors);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', function () { 
            checkInputValidity(inputElement, selectors); 
            
            toggleButtonState(inputList, buttonElement, selectors); 
        });
    });
};

const enableValidation = (selectors) => { 
    const formList = Array.from(document.querySelectorAll(formSelector));  
    formList.forEach((formElement) => { 
        formElement.addEventListener('submit', (evt) => { 
        evt.preventDefault();
        });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass); 
    });
};


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_save-inactive',
    labelSelector: '.popup__field',
    inputErrorClass: 'popup__input-error',
    inputErrorTypeActive: 'popup__input-error_active',
    errorClass: 'popup__error_visible',
  });
