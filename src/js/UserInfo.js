export default class UserInfo {
    constructor({profileName, profileProfession}) {
        this._profileName = document.querySelector(profileName);
        this._profileJob = document.querySelector(ProfileJob);
    }
    getUserInfo() {
        const userValue = {
            name: this._profileName.textContent,
            job: this._profileJob.textContent
        }
        return userValue;
    }
    setUserInfo ({name, job}) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
}