export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatar }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileJob = document.querySelector(profileJobSelector);
        this.profileAvatar = document.querySelector(profileAvatar);
    }
    getUserInfo() {
        return {
            name: this._profileName.textContent,
            about: this._profileJob.textContent,
            avatar: this.profileAvatar,
        };
    }

    setUserInfo({name, about, avatar, _id }) {
        this._profileName.textContent = name ? name : this._profileName.textContent;
        this._profileJob.textContent = about ? about : this._profileJob.textContent;
        this.profileAvatar.src = avatar ? avatar : this.profileAvatar.src;
        this._userID = _id ? _id : this._userID;
    }
}