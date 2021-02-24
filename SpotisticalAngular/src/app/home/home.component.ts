import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../shared/userinformation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private userInformationService : UserInformationService) { }

  ngOnInit(): void {
    
  }

}
