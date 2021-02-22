import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopTracksResult } from '../shared/top-tracks-result.model';
import { UserInformationService } from '../shared/userinformation.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styles: [
  ]
})
export class TopTracksComponent implements OnInit {

  constructor(private http : HttpClient, private userInformationService : UserInformationService) { }

  private baseUrl : string = 'https://localhost:44333/api';
  private result : TopTracksResult = new TopTracksResult();

  ngOnInit(): void {
  }

  getTopTracks(timeRange : string = 'short_term') {
    var userInfo = this.userInformationService.getUserInformation();
    this.http.get(`${this.baseUrl}/toptracks`,
    { params :  new HttpParams()
      .set('userID', userInfo.userID)
      .set('accessToken', userInfo.accessToken)
      .set('timeRange', timeRange)
    })
    .subscribe(res => {
      this.result = res as TopTracksResult;
      console.log(this.result);
      this.userInformationService.setAccessToken(this.result.AccessToken);
    }, err => {
      console.log(err);
    });
  }
}