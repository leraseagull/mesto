export class Card {
    constructor(data, template, handleClickCard) {
      this._data = data;
      this._template = template;
      this._handleClickCard = handleClickCard;
    }
    _getItem() {
      const template = this._template.content.cloneNode(true);
      return template;
    }

    _deleteCard(deleteButton) {
      deleteButton.parentElement.remove();
    }

    _toggleLike(likeButton) {
      likeButton.classList.toggle('card__like_active');
    }

    _setEventListeners() {
        this._cardDelete.addEventListener('click', () => {
          this._deleteCard(this._cardDelete);
        })

        this._cardLike.addEventListener('click', () => {
          this._toggleLike(this._cardLike);
        })

        this._cardPhoto.addEventListener('click', () => {
          this._handleClickCard(this._cardPhoto.alt, this._cardPhoto.src)
        });
      }
      
    addCard() {
      this._card = this._getItem();
      this._cardTitle = this._card.querySelector('.card__title');
      this._cardPhoto = this._card.querySelector('.card__photo');
      this._cardLike = this._card.querySelector('.card__like');
      this._cardDelete = this._card.querySelector('.card__delete');
      this._cardPhoto.alt = this._data.name;
      this._cardPhoto.src = this._data.link;
      this._cardTitle.textContent = this._data.name;
      this._setEventListeners();
      return this._card;
    }
  }
  