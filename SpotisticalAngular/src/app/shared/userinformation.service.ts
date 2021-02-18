import { UserInformation } from "./userinformation.model";

export class UserInformationService {

    constructor() {
        this.storage = window.localStorage;
    }

    private storage : Storage;
    private accessTokenString = 'spotistics-accesstoken';
    private nameString = 'spotistics-username';
    private userIDString = 'spotistics-userid';

    storeUserInformation(userInformation : UserInformation) {
        var storage = window.localStorage;
        storage.setItem(this.accessTokenString, userInformation.accessToken);
        storage.setItem(this.nameString, userInformation.name);
        storage.setItem(this.userIDString, userInformation.userID);
    }

    getUserInformation() : UserInformation {
        var userInformation = new UserInformation();
        if (this.checkIfUserExists() === false) {
            return userInformation;
        }
        userInformation.accessToken = this.storage.getItem(this.accessTokenString) as string;
        userInformation.name = this.storage.getItem(this.nameString) as string;
        userInformation.userID = this.storage.getItem(this.userIDString) as string;
        return userInformation;
    }

    checkIfUserExists() : boolean {
        if (this.storage.getItem(this.nameString) !== null &&
            this.storage.getItem(this.userIDString) !== null &&
            this.storage.getItem(this.accessTokenString) !== null) {
            return true;
        }
        return false;
    }
}