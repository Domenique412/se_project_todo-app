class FormValidator {
    constructor(settings, formEl) {
        this._formEl = formEl;
        this._formSelector = settings.formSelector
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.nputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
    }


    _checkInputValidity(inputElement) {

        if (!inputElement.validity.valid) {
            showInputError(
                inputElement,
                inputElement.validationMessage,
            );
        } else {
            hideInputError(inputElement);
        }
    }

    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector),
        );
        const buttonElement = formEl.querySelector(
            this._submitButtonSelector
        );

        toggleButtonState(this._inputList);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                toggleButtonState(this._inputList);
            });
        });
    }


    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(formEl, settings);
    }
}

export default FormValidator;
