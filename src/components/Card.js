export default class Card {
    constructor({ item, selector, handleCardClick, handleDeleteClick, handleLikeClick, userId }) {
      this._card = document.querySelector(selector).content.querySelector('.card').cloneNode(true);
      this._cardPhoto = this._card.querySelector('.card__photo');
      this._cardTitle = this._card.querySelector('.card__title');
      this._cardLike = this._card.querySelector('.card__like');
      this._cardDelete = this._card.querySelector('.card__delete');
      this.likeCount = this._card.querySelector('.card__like-count');
      this._userID = userId;
      this.name = item['name'];
      this.link = item['link'];
      this._handleCardClick = handleCardClick;
      this._handleDeleteClick = handleDeleteClick;
      this._handleLikeClick = handleLikeClick;
      this._likeData = item['likes'];
      this._id = item['_id'];
      this._idOwnerCard = item.owner['_id'];
      this.likeOwner = this._likeData.some(element => element._id === userId);
    }

    toggleLike(numberLikes) {
      this._cardLike.classList.add('card__like_active');
      this.likeOwner = true;
      this.likeCount.textContent = numberLikes;
    }

    deleteLike(numberLikes) {
      this._cardLike.classList.remove('card__like_active');
      this.likeOwner = false;
      this.likeCount.textContent = numberLikes;
    }


    deleteCard() {
      this._card.remove();
      this._card = null;
    }

    _setEventListeners() {
      this._cardLike.addEventListener('click', () => this._handleLikeClick());
      this._cardDelete.addEventListener('click', () => this._handleDeleteClick());
      this._cardPhoto.addEventListener('click', () => this._handleCardClick());
    }

    createCard() {
      if (this._idOwnerCard !== this._userID) {
        this._cardDelete.remove();
      }
      if (this.likeOwner) {
        this.toggleLike();
      } else { this.deleteLike(); }
      this._cardPhoto.alt = this.name;
      this._cardPhoto.src = this.link;
      this._cardTitle.textContent = this.name;
      this.likeCount.textContent = this._likeData.length;
      this._setEventListeners();
      return this._card;
    }

  }
