const selectorsForm = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_save-inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => { 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => { 
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
    const buttonElement = formElement.querySelector(submitButtonSelector); 
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', function () { 
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
        });
    });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => { 
    const formList = Array.from(document.querySelectorAll(formSelector));  
    formList.forEach((formElement) => { 
        formElement.addEventListener('submit', (evt) => { 
        evt.preventDefault();
        });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass); 
    });
};

const hasInvalidInput = (inputList) => { 
    return inputList.some((inputElement) => { 
    return !inputElement.validity.valid;
    }); 
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => { 
    if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass); 
    } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
    }
};

function hideFormErrors (form) {
    const inputList = Array.from(form.querySelectorAll(selectorsForm.inputSelector));
    const buttonElement = form.querySelector(selectorsForm.submitButtonSelector);
    inputList.forEach((inputElement) => {
        hideInputError(form, inputElement, selectorsForm.inputErrorClass, selectorsForm.errorClass);
    });
    toggleButtonState(inputList, buttonElement, selectorsForm.inactiveButtonClass);
};


enableValidation(selectorsForm);