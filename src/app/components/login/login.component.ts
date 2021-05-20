import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ServicesService } from '../pages/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // email: string="";
  // password: string="";
  constructor(private serviceSvc: ServicesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    const userData={
      correo:"jhon.granados@uptc.edu.co",
      password:"12345",
    };
    this.serviceSvc.login(userData).subscribe( res => console.log('login'));
  }

  onLogin() {
    console.log("this.email");
  } 
}
