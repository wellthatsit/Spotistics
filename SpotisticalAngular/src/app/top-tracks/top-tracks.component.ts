import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
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

  constructor(@Inject('API_BASE_URL') base : string, private http : HttpClient, private userInformationService : UserInformationService) { 
    this.baseUrl = base;
  }

  private baseUrl : string;
  result : TopTracksResult = new TopTracksResult();
  tracks : Track[] = new Array<Track>();
  shortTermTracks : Track[] = new Array<Track>();
  mediumTermTracks : Track[] = new Array<Track>();
  longTermTracks : Track[] = new Array<Track>();

  private tabInactiveClass = 'btn navbar-label';
  private tabActiveClass = 'btn navbar-label bg-success text-white active';

  shortTermClass = '';
  mediumTermClass = '';
  longTermClass = '';

  private shortTermString = 'short_term';
  private mediumTermString = 'medium_term';
  private longTermString = 'long_term';

  ngOnInit(): void {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.longTermClass = this.tabInactiveClass;

    this.getTopTracks(this.shortTermString);
  }

  getTopTracks(timeRange : string) {
    this.tracks = new Array<Track>();

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
      if (environment.production) { 
        console.log(err);
      }
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
    this.longTermClass = this.tabInactiveClass;

    this.getTopTracks(this.shortTermString);
  }

  mediumTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabActiveClass;
    this.longTermClass = this.tabInactiveClass;

    this.getTopTracks(this.mediumTermString);
  }

  longTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.longTermClass = this.tabActiveClass;

    this.getTopTracks(this.longTermString);
  }
}