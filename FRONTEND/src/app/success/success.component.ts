import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
LoginComponent:any;
uEmail:any;
  constructor() {
    console.log(LoginComponent.userEmail);
    this.uEmail=LoginComponent.userEmail;
   }

  ngOnInit(): void {
//this.uEmail='';
  }

}
