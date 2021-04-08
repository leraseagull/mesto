export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopupKeydown = this._closePopupKeydown.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupKeydown)
    }

    _close() {
        this._popup.classList.add('popup__opened');
        document.removeEventListener('keydown', this._closePopupKeydown)
    }

    _closePopupKeydown(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target !== this._popup) return; {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popup.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt));
    }


}