import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''],
      
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });
  // form = new FormGroup({
  //   gender: ['', Validators.required]
  // })
  // currentStyles: Record<string , string> = {}
  // canSave: any;
  // isUnchanged: any;
  // isSpecial: any;
// checkboxGroup = new  FormGroup({

// });
country = 'usa';
form: FormGroup;
constructor(fb: FormBuilder) {
  // this.name = 'Angular2'
  this.form = fb.group({
  fname: ['', Validators.required],
   lname: ['', Validators.required],
   email: ['', Validators.required],
    gender: ['', Validators.required]
  });
}
  // constructor(private fb :FormBuilder) { 
    
  // }

  ngOnInit(): void {

 
  }

  profile(){
   let obj = JSON.stringify
   (this.form.value)
    console.log('Re-Details',obj);    
  }
  // toggle(){

  // }
  submit(){
    // this.name.setValue('venkat')JSON.stringify(this.profileForm.value)
  //   let obj = JSON.stringify(this.profileForm.value)
  //   let obj2= JSON.parse(obj)
  // console.log(this.profileForm,'User Details');
  // console.log(obj,'JSON Stringfy');
  // console.log(obj2,'JSON Parse');
  

  
  }
  // get aliases() {
  //   // return this.profileForm.get('aliases') as FormArray;
  // }
  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }
  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'font-style':  this.canSave      ? 'italic' : 'normal',
  //     'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
  //     'font-size':   this.isSpecial    ? '24px'   : '12px'
  //   };
  // }
}
