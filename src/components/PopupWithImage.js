import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-full-image__image');
        this._caption = this._popup.querySelector('.popup-full-image__caption');
    }

    open(photoTitle, photoSrc) {
        super.open();

        this._image.alt = photoTitle;
        this._image.src = photoSrc;
        this._caption.textContent = photoTitle;

    }
}

