import { Injectable } from "@angular/core";
import { UserInformation } from "./userinformation.model";

@Injectable ({
    providedIn: 'root'
})
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

    setAccessToken(accessToken : string) {
        this.storage.setItem(this.accessTokenString, accessToken);
    }

    checkIfUserExists() : boolean {
        if (this.storage.getItem(this.nameString) !== null &&
            this.storage.getItem(this.userIDString) !== null &&
            this.storage.getItem(this.accessTokenString) !== null) {
            return true;
        }
        return false;
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

    deleteUserInformation() {
        this.storage.removeItem(this.accessTokenString);
        this.storage.removeItem(this.nameString);
        this.storage.removeItem(this.userIDString);
    }
}