import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    DOB: [''],
    gender: ['', Validators.required],
    marriedStatus: [''],
    income: [''],
    city: [''],
    state: [''],
    country: [''],
    corona: [''],
    note: ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm);
    // console.log(this.firstNameCtrl); call the function without bracket
  }

  // get email(){
  //   return this.userForm.get('email')
  // }

  get firstNameCtrl() {
    return this.userForm.get('firstName');
  }

  // get lastName(){
  //   return this.userForm.get('lastName')
  // }

  get gender() {
    return this.userForm.get('gender')
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

}
