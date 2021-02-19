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
    if (this.userInformationService.checkIfUserExists() === true) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    console.log(this.loggedIn);
    console.log(new Date(Date.now()));
  }

  loggedIn : boolean;

  ngOnInit() {
    
  }

  logIn() {
    this.loginService.startLogin();
    console.log("fazs");
    this.loggedIn = true;
  }

  logOut() {
    this.loginService.logOut();
    this.loggedIn = false;
  }

  ngOnChanges() {
  }

  title = 'Spotistical';
}
