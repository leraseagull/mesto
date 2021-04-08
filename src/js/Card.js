export default class Card {
    constructor(item, cardSelector, {handleCardClick}) {
      this._name = item.name
      this._link = item.link
      this._cardSelector = cardSelector
      this._handleCardClick = handleCardClick
    }
    _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

      return cardElement;
    }

    generateCard () {
      this._element = this._getTemplate()
      this._cardPhoto = this._element.querySelector('.card__photo')
      this._element.querySelector('.card__title').textContent = this._name;
      this._cardPhoto.src = this._link;
      this._cardPhoto.alt = this._name;
      this._cardLike = this._element.querySelector('.card__like')
      this._setEventListeners()
      return this._element
    }

    _setEventListeners() {
      this._cardDelete.addEventListener('click', () => {
        this._deleteCard(this._cardDelete);
      })

      this._cardLike.addEventListener('click', () => {
        this._toggleLike(this._cardLike);
      })

      this._cardPhoto.addEventListener('click', () => {
        this._handleClickCard(this._name, this._link)
      });
    }

    _deleteCard(deleteButton) {
      deleteButton._element.remove();
    }

    _toggleLike(likeButton) {
      this._likeButton.classList.toggle('card__like_active');
    }

  }
