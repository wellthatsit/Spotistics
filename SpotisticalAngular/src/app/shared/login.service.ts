import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyCode } from '../login/spotifycode.model';
import { UserInformation } from './userinformation.model';
import { UserInformationService } from './userinformation.service';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router : Router, private route : ActivatedRoute, private http : HttpClient, private userInformationService : UserInformationService, private location : Location) {
   }

  private baseUrl : string = "https://localhost:44333/api";
  private spotifyLoginUrl : string = "";
  private codeQueryParameter : string = "";

  startLogin() {
    this.http.get(`${this.baseUrl}/login`, { responseType : 'text' })
    .subscribe(
      res => {
        this.spotifyLoginUrl = res as string;
        window.location.href = this.spotifyLoginUrl;
      },
      err => {
        console.log(err);
      }
    );
  }

  storeCodeQueryParameter() {
    this.route.queryParamMap.subscribe(params =>
      {
        this.codeQueryParameter = params.get('code') as string;
        if (this.codeQueryParameter !== "" && this.codeQueryParameter !== null) {
          this.finishLogin();
        }
      }
    );
  }

  finishLogin() {
    var spotifyCode = new SpotifyCode();
    spotifyCode.code = this.codeQueryParameter;

    this.http.post(`${this.baseUrl}/login`, spotifyCode)
    .subscribe(
      res => {
        var userInformation = res as UserInformation;
        this.userInformationService.storeUserInformation(userInformation)
        
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }

  logOut() {
    this.userInformationService.deleteUserInformation();
  }
}
