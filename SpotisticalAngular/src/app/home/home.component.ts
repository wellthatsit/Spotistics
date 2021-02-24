import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { UserInformationService } from '../shared/userinformation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private userInformationService : UserInformationService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.loginService.loginDoneEvent.subscribe(this.loginDoneEventHandler);
  }

  loggedIn = false;

  logIn() {
    this.loginService.logIn();
  }

  loginDoneEventHandler = (loginResult : boolean) => {
    this.loggedIn = loginResult;
  }
}
