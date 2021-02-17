import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../shared/track.model';
import { SpotifyCode } from '../shared/spotifycode.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private http : HttpClient) {
      this.topTracks = [];
      this.route.queryParamMap.subscribe(params =>
        {
          console.log(params);
          this.code = params.get('code') as string;
          if (this.code !== "" && this.code !== null) {
            console.log("code is: " + this.code);
            this.continueLogin();
          }
        }
      );
     }

  ngOnInit(): void {
  }

  private baseUrl : string = "https://localhost:44333/api";

  luckyNumber : number = 1;
  uri : string = "";
  code : string = "";
  topTracks : Track[];

  startLogin() {
    this.http.get(`${this.baseUrl}/login`, { responseType : 'text' })
    .subscribe(
      res => {
        this.uri = res as string;
        console.log("my uri is " + this.uri);
        window.location.href = this.uri;
      },
      err => {
        console.log(err);
      }
    );
  }

  continueLogin() {
    var spotifyCode = new SpotifyCode();
    spotifyCode.code = this.code;

    this.http.post(`${this.baseUrl}/login`, spotifyCode)
    .subscribe(
      res => {
        this.topTracks = res as Track[];
        console.log(this.topTracks);
      },
      err => {
        console.log(err);
      }
    );
  }

}
