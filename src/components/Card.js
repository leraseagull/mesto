export default class Card {
    constructor(item, cardSelector, {handleCardClick}) {
      this._cardElement = document.querySelector(cardSelector).content.querySelector('.card').cloneNode(true);
      this._cardPhoto = this._cardElement.querySelector('.card__photo');
      this._cardTitle = this._cardElement.querySelector('.card__title');
      this._cardLike = this._cardElement.querySelector('.card__like');
      this._cardDelete = this._cardElement.querySelector('.card__delete');
      this._name = item['name'];
      this._link = item['link'];
      this._handleCardClick = handleCardClick;
    }

    _toggleLike() {
      this._cardLike.classList.toggle('card__like_active');
    }

    _deleteCard() {
      this._cardElement.remove();
      this._cardElement = null;
    }

    _setEventListeners() {
      this._cardDelete.addEventListener('click', () => this._deleteCard());
      this._cardLike.addEventListener('click', () => this._toggleLike());
      this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    generateCard() {
      this._cardPhoto.alt = this._name;
      this._cardPhoto.src = this._link;
      this._cardTitle.textContent = this._name;
      this._setEventListeners();
      return this._cardElement;
    }

  }
