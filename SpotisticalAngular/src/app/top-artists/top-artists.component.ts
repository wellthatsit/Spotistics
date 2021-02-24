import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Artist } from '../shared/artist.model';
import { TopArtistsResult } from '../shared/top-artists-result.model';
import { UserInformation } from '../shared/userinformation.model';
import { UserInformationService } from '../shared/userinformation.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styles: [
  ]
})
export class TopArtistsComponent implements OnInit {

  constructor(@Inject('API_BASE_URL') base : string, private http : HttpClient, private userInformationService : UserInformationService) {
    this.baseUrl = base;
   }

  private baseUrl : string;
  result : TopArtistsResult = new TopArtistsResult();
  artists : Artist[] = new Array<Artist>();
  shortTermArtists : Artist[] = new Array<Artist>();
  mediumTermArtists : Artist[] = new Array<Artist>();
  longTermArtists : Artist[] = new Array<Artist>();

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

    this.getTopArtists(this.shortTermString);
  }

  getTopArtists(timeRange : string) {
    if (this.checkIfAlreadyCached(timeRange) === true) {
      return;
    }

    var userInfo = this.userInformationService.getUserInformation();
    this.http.get(`${this.baseUrl}/topartists`,
    { params :  new HttpParams()
      .set('userID', userInfo.userID)
      .set('accessToken', userInfo.accessToken)
      .set('timeRange', timeRange)
    })
    .subscribe(res => {
      this.result = res as TopArtistsResult;
      this.userInformationService.setAccessToken(this.result.accessToken);
      this.artists = this.result.topArtists;
      this.saveTopArtists(this.result.topArtists, timeRange);
    }, err => {
      console.log(err);
    });
  }

  saveTopArtists(artists : Artist[], timeRange : string) {
    if (timeRange === this.shortTermString) {
      this.shortTermArtists = artists;
    } else if (timeRange === this.mediumTermString) {
      this.mediumTermArtists = artists;
    } else {
      this.longTermArtists = artists;
    }
  }

  checkIfAlreadyCached(timeRange : string) : boolean {
    var isCached = false;

    if (timeRange === this.shortTermString && this.shortTermArtists.length > 0) {
      this.artists = this.shortTermArtists;
      isCached = true;
    } else if (timeRange === this.mediumTermString && this.mediumTermArtists.length > 0) {
      this.artists = this.mediumTermArtists;
      isCached = true;
    } else if (timeRange === this.longTermString && this.longTermArtists.length > 0) {
      this.artists = this.longTermArtists;
      isCached = true;
    }

    return isCached;
  }

  shortTermClicked() {
    this.shortTermClass = this.tabActiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.longTermClass = this.tabInactiveClass;

    this.getTopArtists(this.shortTermString);
  }

  mediumTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabActiveClass;
    this.longTermClass = this.tabInactiveClass;

    this.getTopArtists(this.mediumTermString);
  }

  longTermClicked() {
    this.shortTermClass = this.tabInactiveClass;
    this.mediumTermClass = this.tabInactiveClass;
    this.longTermClass = this.tabActiveClass;

    this.getTopArtists(this.longTermString);
  }
}
