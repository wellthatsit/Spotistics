import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { UserInformationService } from '../shared/userinformation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styles: [
  ]
})
export class NavigationBarComponent implements OnInit {
  constructor(private userInformationService : UserInformationService, private loginService : LoginService, private router : Router) {
    router.events.subscribe(e => {
      this.isCollapsed = true;
      var url = router.url;
      if (url === '/') {
        this.homeClass = this.activeClass;
        this.topTracksClass = this.inactiveClass;
        this.topArtistsClass = this.inactiveClass;
      } else if (url === '/top-tracks') {
        this.homeClass = this.inactiveClass;
        this.topTracksClass = this.activeClass;
        this.topArtistsClass = this.inactiveClass;
      } else if (url === '/top-artists') {
        this.homeClass = this.inactiveClass;
        this.topTracksClass = this.inactiveClass;
        this.topArtistsClass = this.activeClass;
      }
    });

    this.loggedIn = loginService.isLoggedIn();
    if (this.loggedIn === false) {
      loginService.loginInProgressEvent.subscribe(this.loginInProgressEventHandler);
      loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
    } else {
      this.userName = this.userInformationService.getUserInformation().name;
    }
    this.isCollapsed = true;
   }

  ngOnInit(): void {
  }

  activeClass = 'nav-link active';
  inactiveClass = 'nav-link';
  homeClass = '';
  topTracksClass = '';
  topArtistsClass = '';
  isCollapsed = true;
  loginInProgress : boolean = false;
  loggedIn : boolean = false;
  userName : string = '';

  logIn() {
    this.loginService.logIn();
  }

  loginInProgressEventHandler = (loginInProgress : boolean) => {
    this.loginInProgress = loginInProgress;
  }

  loginDoneEventHandler = (loginResult : boolean) => {
    this.loggedIn = loginResult;
    this.userName = this.userInformationService.getUserInformation().name;
  }

  logOut() {
    this.loginService.logOut();
    this.loggedIn = false;
    this.router.navigate(['']);
  }
}
