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
      if (url === '/top-tracks') {
        this.homeClass = this.inactiveClass;
        this.topTracksClass = this.activeClass;
        this.topArtistsClass = this.inactiveClass;
      } else if (url === '/top-artists') {
        this.homeClass = this.inactiveClass;
        this.topTracksClass = this.inactiveClass;
        this.topArtistsClass = this.activeClass;
      } else {
        this.homeClass = this.activeClass;
        this.topTracksClass = this.inactiveClass;
        this.topArtistsClass = this.inactiveClass;
      }
    });

    this.loggedIn = loginService.isLoggedIn();
    loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
    this.isCollapsed = true;
   }

  ngOnInit(): void {
  }

  activeClass = 'nav-link active';
  inactiveClass = 'nav-link';
  homeClass = this.activeClass;
  topTracksClass = this.inactiveClass;
  topArtistsClass = this.inactiveClass;
  isCollapsed = true;
  loginInProgress : boolean = false;
  loggedIn : boolean = false;
  userName : string = '';

  logIn() {
    this.loginService.logIn();
  }

  loginDoneEventHandler = (loginResult : boolean) => {
    this.loggedIn = loginResult;
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }
}
