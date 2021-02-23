import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';
import { UserInformationService } from './shared/userinformation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private userInformationService : UserInformationService, private loginService : LoginService) {  
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
  }

  logOut() {
    this.loginService.logOut();
    this.loggedIn = false;
  }

  ngOnChanges() {
  }

  title = 'Spotistical';
}
