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
  constructor () {
    
  }

  title = 'Spotistical';
}
