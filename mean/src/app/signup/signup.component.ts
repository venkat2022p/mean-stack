import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup | any;
name: any;
  constructor(private router :Router) {
    this.signUpForm = new FormGroup({
      name:new FormControl(null, Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onSubmit(){
    if(!this.signUpForm.valid){
      return;
    }
    localStorage.setItem('email',this.signUpForm.email)
    localStorage.setItem('password',this.signUpForm.password)
    this.router.navigate(['/login'])
  }
}
