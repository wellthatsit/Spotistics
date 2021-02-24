import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private router : Router, private activatedRoute : ActivatedRoute, private loginService : LoginService) {
    this.activatedRoute.queryParams.subscribe(data => {
      
    });

    if (loginService.isLoggedIn() === false) {
      loginService.loginInProgressEvent.subscribe(this.loginInProgressEventHandler);
    }
  }

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
        this.loginService.checkForCodeAndFinishLogin();
    });
  }

  loginInProgress = false;

  loginInProgressEventHandler = (loginInProgress : boolean) => {
    this.loginInProgress = loginInProgress;
  }


  title = 'Spotistical';
}
