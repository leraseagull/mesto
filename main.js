(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.item,o=e.selector,i=e.handleCardClick,a=e.handleDeleteClick,c=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=document.querySelector(o).content.querySelector(".card").cloneNode(!0),this._cardPhoto=this._card.querySelector(".card__photo"),this._cardTitle=this._card.querySelector(".card__title"),this._cardLike=this._card.querySelector(".card__like"),this._cardDelete=this._card.querySelector(".card__delete"),this.likeCount=this._card.querySelector(".card__like-count"),this._userId=n,this.name=r.name,this.link=r.link,this._handleCardClick=i,this._handleDeleteClick=a,this._handleLikeClick=c,this._likeData=r.likes,this._id=r._id,this._idOwnerCard=r.owner._id,this.likeOwner=this._likeData.some((function(e){return e._id===n}))}var n,r;return n=t,(r=[{key:"toggleLike",value:function(e){this._cardLike.classList.add("card__like_active"),this.likeOwner=!0,this.likeCount.textContent=e}},{key:"deleteLike",value:function(e){this._cardLike.classList.remove("card__like_active"),this.likeOwner=!1,this.likeCount.textContent=e}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){return e._handleLikeClick()})),this._cardDelete.addEventListener("click",(function(){return e._handleDeleteClick()})),this._cardPhoto.addEventListener("click",(function(){return e._handleCardClick()}))}},{key:"createCard",value:function(){return console.log(this._idOwnerCard),console.log(this._userId),this._idOwnerCard!==this._userId&&this._cardDelete.remove(),this.likeOwner?this.toggleLike():this.deleteLike(),this._cardPhoto.alt=this.name,this._cardPhoto.src=this.link,this._cardTitle.textContent=this.name,this.likeCount.textContent=this._likeData.length,this._setEventListeners(),this._card}}])&&e(n.prototype,r),t}();function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectors=t,this._form=n}var t,o;return t=e,(o=[{key:"_showInputError",value:function(){var e=this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);this._inputElement.classList.add(this._selectors._inputTypeErrorClass),e.textContent=this._inputElement.validationMessage,e.classList.add(this._selectors.inputErrorActiveClass)}},{key:"_hideInputError",value:function(){var e=this._inputElement.closest(this._selectors.labelSelector).querySelector(this._selectors.inputErrorSelector);this._inputElement.classList.remove(this._selectors._inputTypeErrorClass),e.classList.remove(this._selectors.inputErrorActiveClass),e.textContent=""}},{key:"_formValidation",value:function(e){this._inputElement=e,this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._selectors.inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._selectors.inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e,t=this;this._inputList=function(e){if(Array.isArray(e))return n(e)}(e=this._form.querySelectorAll(this._selectors.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._buttonElement=this._form.querySelector(this._selectors.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._formValidation(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetError",value:function(){var e=this;this._inputList.forEach((function(t){e._inputElement=t,e._hideInputError()}))}}])&&r(t.prototype,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===this._popup&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",(function(t){return e._handleOverlayClose(t)}))}}])&&i(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup-full-image__image"),t._caption=t._popup.querySelector(".popup-full-image__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){s(p(a.prototype),"open",this).call(this),this._image.alt=e,this._image.src=t,this._caption.textContent=e}}])&&u(t.prototype,n),a}(a);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitForm=r,t._inputList=t._popup.querySelectorAll(".popup__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;_(b(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector("form").addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){_(b(a.prototype),"close",this).call(this),this._popup.querySelector("form").reset()}},{key:"open",value:function(){this._inputList.forEach((function(e){return e.dispatchEvent(new Event("input"))})),_(b(a.prototype),"open",this).call(this)}}])&&y(t.prototype,n),a}(a);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.renderer,r=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&S(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.profileNameSelector,r=t.profileJobSelector,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this.profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent,avatar:this.profileAvatar}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._profileName.textContent=t||this._profileName.textContent,this._profileJob.textContent=n||this._profileJob.textContent,this.profileAvatar.src=r||this.profileAvatar.src,this._userId=o||this._userId}}])&&g(t.prototype,n),e}(),w=document.querySelector(".page"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",labelSelector:".popup__field",inputErrorSelector:".popup__error",inputTypeErrorClass:".popup__input_type_error",inputErrorActiveClass:"popup__error_visible"},L=document.querySelector("#popup-profile"),j=document.forms["form-profile"],P=j.elements.name,I=j.elements.about,R=L.querySelector(".popup__button"),q=w.querySelector(".profile__edit-button"),A=w.querySelector("#popup-element"),T=A.querySelector("#element-submit"),x=w.querySelector("#add-element"),D=w.querySelector(".profile__avatar-act"),B=w.querySelector("#popup-avatar"),U=B.querySelector("#avatar-submit");function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.forms["avatar-photo"].elements.link;var J=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(){return fetch("".concat(this._address,"/cards/").concat(this.elem._id),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setCurrentElement",value:function(e){this.elem=e}},{key:"deleteLike",value:function(){return fetch("".concat(this._address,"/cards/likes/").concat(this.elem._id),{method:"Delete",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"putLike",value:function(){return fetch("".concat(this._address,"/cards/likes/").concat(this.elem._id),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editAvatarPhoto",value:function(e){var t=e.link;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&N(t.prototype,n),e}();function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),F($(a.prototype),"setEventListeners",this).call(this)}}])&&V(t.prototype,n),a}(a);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=0,W=new h("#popup-full-image");W.setEventListeners();var X=function(e){var n=new t({item:e,selector:".template-card",handleCardClick:function(){W.open(n.name,n.link)},handleDeleteClick:function(){Y.open(),Z.setCurrentElement(n)},handleLikeClick:function(){Z.setCurrentElement(n),n.likeOwner?Z.deleteLike().then((function(e){n.deleteLike(e.likes.length)})).catch((function(e){return console.error(e)})):Z.putLike().then((function(e){n.toggleLike(e.likes.length)})).catch((function(e){return console.error(e)}))}},Q);return n.createCard(e)},Y=new G({popupSelector:"#popup-place-delete-card",handleSubmit:function(){Z.deleteCard().then((function(){Z.elem.deleteCard(),Y.close()})).catch((function(e){return console.error(e)}))}});Y.setEventListeners();var Z=new J({address:"https://mesto.nomoreparties.co/v1/cohort-23",token:"3ba80848-84c8-48bd-a97a-d35ecfe36586"});Promise.all([Z.getInitialCards(),Z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=i._id,ee.renderItems(o),ne.setUserInfo(i)})).catch((function(e){return console.error(e)}));var ee=new E({renderer:function(e){ee.addItem(X(e))},containerSelector:".cards__list"}),te=new k({popupSelector:"#popup-element",submitForm:function(e){T.textContent="Сохранение...",Z.addCard(e).then((function(e){ee.addItem(X(e)),te.close()})).catch((function(e){return console.error(e)})).finally((function(){T.textContent="Создать"}))}});te.setEventListeners(),x.addEventListener("click",(function(){te.open(),ae.resetError()}));var ne=new C({profileNameSelector:".profile__info-author",profileJobSelector:".profile__info-subline",profileAvatar:".profile__avatar"}),re=new k({popupSelector:"#popup-profile",submitForm:function(e){R.textContent="Сохранение...",Z.editUserInfo(e).then((function(){ne.setUserInfo(e),re.close()})).catch((function(e){return console.error(e)})).finally((function(){R.textContent="Сохранить"}))}});re.setEventListeners(),q.addEventListener("click",(function(){var e=ne.getUserInfo();P.value=e.name,I.value=e.about,re.open()}));var oe=new k({popupSelector:"#popup-avatar",submitForm:function(e){U.textContent="Сохранение...",Z.editAvatarPhoto(e).then((function(e){ne.setUserInfo(e),oe.close()})).catch((function(e){return console.error(e)})).finally((function(){U.textContent="Сохранить"}))}});oe.setEventListeners(),D.addEventListener("click",(function(){oe.open(),ce.resetError()}));var ie=new o(O,L),ae=new o(O,A),ce=new o(O,B);ae.enableValidation(),ie.enableValidation(),ce.enableValidation()})();