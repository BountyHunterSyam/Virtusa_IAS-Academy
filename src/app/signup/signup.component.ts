import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(){}
  public user={
    admin_user:'',
    email:'',
    username:'',
    mobileNumber:'',
    password:'',
    confirmPassword:'',
    };
    formSubmit(){
      
    }

}
