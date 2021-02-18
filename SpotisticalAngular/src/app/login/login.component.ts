import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SpotifyCode } from './spotifycode.model';
import { UserInformation } from './userinformation.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private http : HttpClient) {
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
  private userInformation : UserInformation = new UserInformation;

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
        this.userInformation = res as UserInformation;
        console.log(this.userInformation);
      },
      err => {
        console.log(err);
      }
    );
  }

}
