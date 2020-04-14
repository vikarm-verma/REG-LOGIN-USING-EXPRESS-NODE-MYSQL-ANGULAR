import { Component, OnInit, Input, ElementRef,ViewChild } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { FormGroup, FormControl,NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public static userEmail:any;
  email: any;
  password: any;
  userArray: any;
  result:boolean=false;
  constructor(private ccs: ConnectingserviceService,private router:Router) {
    
    this.ccs.getUser().subscribe(res => {
      //  this.allUsers = data;
      console.log(res)
      this.userArray = res['response'];
      console.log(this.userArray);
     
    });
  
  }
  @ViewChild("data")loginForm:NgForm;
validate()
{
  console.log(this.loginForm);
  this.result=false;
  for(var ua of this.userArray)
  {
    this.result=false;
    console.log(ua.user_name+' '+ua.password);
    if((ua.user_name===this.email && ua.password===this.password))
    {
      this.result=true;
      console.log("welcome "+this.result); 
      LoginComponent.userEmail=this.email;
      this.router.navigate(['/success']);
      return;
      //break;
    }
    else{
      this.result=false;
      this.router.navigate(['/fail']);
    } 
  }
}
  ngOnInit() {
    ///   this.getAllUsers();
  }}
