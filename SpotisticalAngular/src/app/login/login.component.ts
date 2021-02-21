import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginService) {
    loginService.storeCodeQueryParameter();
  }

  ngOnInit(): void {
    
  }
}
