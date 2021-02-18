import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SpotifyCode } from './spotifycode.model';
import { UserInformationService } from '../shared/userinformation.service';
import { UserInformation } from '../shared/userinformation.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route : ActivatedRoute, private http : HttpClient, private userInformationService : UserInformationService) {
      this.route.queryParamMap.subscribe(params =>
        {
          console.log(params);
          this.code = params.get('code') as string;
          if (this.code !== "" && this.code !== null) {
            console.log("code is: " + this.code);
            this.finishLogin();
          }
        }
      );
     }

  ngOnInit(): void {
  }

  private baseUrl : string = "https://localhost:44333/api";
  private uri : string = "";
  private code : string = "";

  startLogin() {
    this.http.get(`${this.baseUrl}/login`, { responseType : 'text' })
    .subscribe(
      res => {
        this.uri = res as string;
        window.location.href = this.uri;
      },
      err => {
        console.log(err);
      }
    );
  }

  finishLogin() {
    var spotifyCode = new SpotifyCode();
    spotifyCode.code = this.code;

    this.http.post(`${this.baseUrl}/login`, spotifyCode)
    .subscribe(
      res => {
        var userInformation = res as UserInformation;
        console.log(userInformation);
        this.userInformationService.storeUserInformation(userInformation);
      },
      err => {
        console.log(err);
      }
    );
  }
}
