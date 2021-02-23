import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopTracksResult } from '../shared/top-tracks-result.model';
import { Track } from '../shared/track.model';
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
  result : TopTracksResult = new TopTracksResult();
  tracks : Track[] = new Array<Track>();

  private tabInactiveClass = 'nav-link';
  private tabActiveClass = 'nav-link active';

  shortTermClass = '';
  mediumTermClass = '';
  LongTermClass = '';

  ngOnInit(): void {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabInactiveClass;

    this.getTopTracks();
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
      this.userInformationService.setAccessToken(this.result.accessToken);
      this.tracks = this.result.topTracks;
    }, err => {
      this.result = new TopTracksResult();
      console.log(err);
    });
  }

  shortTermClicked() {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabInactiveClass;
  }

  mediumTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabActiveClass;
    this.LongTermClass = this.tabInactiveClass;
  }

  longTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabActiveClass;
  }
}