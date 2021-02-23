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
  shortTermTracks : Track[] = new Array<Track>();
  mediumTermTracks : Track[] = new Array<Track>();
  longTermTracks : Track[] = new Array<Track>();

  private tabInactiveClass = 'nav-link';
  private tabActiveClass = 'nav-link active';

  shortTermClass = '';
  mediumTermClass = '';
  LongTermClass = '';

  private shortTermString = 'short_term';
  private mediumTermString = 'medium_term';
  private longTermString = 'long_term';

  ngOnInit(): void {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabInactiveClass;

    this.getTopTracks(this.shortTermString);
  }

  getTopTracks(timeRange : string) {
    if (this.checkIfAlreadyCached(timeRange) === true) {
      return;
    }

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
      this.saveTopTracks(this.result.topTracks, timeRange);
    }, err => {
      this.result = new TopTracksResult();
      console.log(err);
    });
  }

  saveTopTracks(tracks : Track[], timeRange : string) {
    if (timeRange === this.shortTermString) {
      this.shortTermTracks = tracks;
    } else if (timeRange === this.mediumTermString) {
      this.mediumTermTracks = tracks;
    } else {
      this.longTermTracks = tracks;
    }
  }

  checkIfAlreadyCached(timeRange : string) : boolean {
    var isCached = false;

    if (timeRange === this.shortTermString && this.shortTermTracks.length > 0) {
      this.tracks = this.shortTermTracks;
      isCached = true;
    } else if (timeRange === this.mediumTermString && this.mediumTermTracks.length > 0) {
      this.tracks = this.mediumTermTracks;
      isCached = true;
    } else if (timeRange === this.longTermString && this.longTermTracks.length > 0) {
      this.tracks = this.longTermTracks;
      isCached = true;
    }

    return isCached;
  }

  shortTermClicked() {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabInactiveClass;

    this.getTopTracks(this.shortTermString);
  }

  mediumTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabActiveClass;
    this.LongTermClass = this.tabInactiveClass;

    this.getTopTracks(this.mediumTermString);
  }

  longTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.LongTermClass = this.tabActiveClass;

    this.getTopTracks(this.longTermString);
  }
}