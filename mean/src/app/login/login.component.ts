import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../serives/common.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(private router :Router, private commonService: CommonService) {
    this.loginForm = new FormGroup({
      email: new FormControl('admin@gmail.com', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('Admin@123', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  }
  ngOnInit(): void {
    this.commonService.onSubscription();
    // throw new Error('Method not implemented.');
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    this.commonService.onSubmit();
    localStorage.setItem('email',this.loginForm.email)
    localStorage.setItem('password',this.loginForm.password)
    this.router.navigate(['/layout'])
  }
}
