import { Injectable, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyCode } from './spotifycode.model';
import { UserInformation } from './userinformation.model';
import { UserInformationService } from './userinformation.service';
import { Location } from '@angular/common'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject('API_BASE_URL') base : string, private router : Router, private route : ActivatedRoute, private http : HttpClient, private userInformationService : UserInformationService, private location : Location) {
    this.baseUrl = base;
   }

  private baseUrl : string;
  private spotifyLoginUrl : string = '';
  private codeQueryParameter : string = '';
  private myStorage = window.localStorage;
  private loggedInStatusString : string = 'spotistics-loggedin';

  loginInProgressEvent = new EventEmitter();
  loginDoneEvent = new EventEmitter();

  logIn() {
    this.loginInProgressEvent.emit(true);
    this.http.get(`${this.baseUrl}/account/startlogin`, { responseType : 'text' })
    .subscribe(
      res => {
        this.spotifyLoginUrl = res as string;
        window.location.href = this.spotifyLoginUrl;
      },
      err => {
        if (environment.production !== true) {
          console.log(err);
        }
      }
    );
  }

  checkForCodeAndFinishLogin() {
    this.route.queryParamMap.subscribe(params =>
      {
        this.codeQueryParameter = params.get('code') as string;
        if (this.codeQueryParameter !== "" && this.codeQueryParameter !== null) {
          this.loginInProgressEvent.emit(true);
          this.finishLogin();
        }
      }
    );
  }

  finishLogin() {
    var spotifyCode = new SpotifyCode();
    spotifyCode.code = this.codeQueryParameter;

    this.http.post(`${this.baseUrl}/account/finishlogin`, spotifyCode)
    .subscribe(
      res => {
        var userInformation = res as UserInformation;
        this.userInformationService.storeUserInformation(userInformation);

        this.setLogin();
        this.loginDoneEvent.emit(true);
        this.loginInProgressEvent.emit(false);
        
        this.router.navigate(['']);
      },
      err => {
        if (environment.production !== true) {
          console.log(err);
        }
      }
    );
  }

  logOut() {
    var userInformation = new UserInformation();
    userInformation.userID = this.userInformationService.getUserInformation().userID;
    this.http.post(`${this.baseUrl}/account/logout`, userInformation)
    .subscribe(
      res => { },
      err => {
        if (environment.production !== true) {
          console.log(err);
        }
      }
    );
    this.myStorage.removeItem(this.loggedInStatusString);
    this.userInformationService.deleteUserInformation();
    this.loginDoneEvent.emit(false);
  }

  private setLogin() {
    this.myStorage.setItem(this.loggedInStatusString, '');
  }

  isLoggedIn() {
    if (this.myStorage.getItem(this.loggedInStatusString) !== null) {
      return true;
    } else {
      return false;
    }
  }
}
