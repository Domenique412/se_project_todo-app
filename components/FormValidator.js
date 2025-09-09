class FormValidator {
    constructor(settings, formEl) {
        this._formEl = formEl;
        this._formSelector = settings.formSelector
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
    }


    _checkInputValidity(inputElement) {

        if (!inputElement.validity.valid) {
            this._showInputError(
                inputElement,
                inputElement.validationMessage,
            );
        } else {
            this._hideInputError(inputElement);
        }
    }

    _toggleButtonState() {
        const isFormValid = this._inputList.every(input => input.validity.valid);

        if (isFormValid) {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }
    _setEventListeners() {
        this._inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector),
        );
        this._buttonElement = this._formEl.querySelector(
            this._submitButtonSelector
        );

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }


    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }



    resetValidation() {
        this._inputList.forEach(inputElement => {
            inputElement.value = "";
            this._hideInputError(inputElement);
        });
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    };

}




export default FormValidator;

