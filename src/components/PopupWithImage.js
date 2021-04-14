import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-full-image__image');
        this._caption = this._popup.querySelector('.popup-full-image__caption');
    }

    open(PhotoTitle, PhotoLink) {
        super.open();
        this._image.alt = PhotoTitle;
        this._image.src = PhotoLink;
        this._caption.textContent = PhotoTitle;

    }
}

