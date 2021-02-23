import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';
import { UserInformationService } from './shared/userinformation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private userInformationService : UserInformationService, private loginService : LoginService, private router : Router) {  
    this.loggedIn = loginService.isLoggedIn();
    if (this.loggedIn === false) {
      loginService.loginInProgressEvent.subscribe(this.loginInProgressEventHandler);
      loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
    } else {
      this.userName = this.userInformationService.getUserInformation().name;
    }
  }

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

  ngOnChanges() {
  }

  title = 'Spotistical';
}
