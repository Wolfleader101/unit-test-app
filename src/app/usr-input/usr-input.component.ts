import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCheck } from '../User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usr-input',
  templateUrl: './usr-input.component.html',
  styleUrls: ['./usr-input.component.css']
})
export class UsrInputComponent implements OnInit {
  check: UserCheck;

  userForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    Gender: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
  });

  constructor(private http: HttpClient) {
    this.check = new UserCheck();
  }

  submit(event: Event) {

    const Usr = this.check.getInfo(
                  this.userForm.controls.Name.value,
                  this.userForm.controls.Age.value,
                  this.userForm.controls.Gender.value,
                  this.userForm.controls.Email.value,
                  this.userForm.controls.Password.value,
                  );
    console.log(Usr);                         // logs the users parsed info.
    console.log(this.userForm.getRawValue()); // ^^ both of these are the same. TODO add more form data but only parse required ones in Usr
    if (this.userForm.controls.Name.errors !== null ) {
       console.log('please enter a name');
    } else {
      console.log('thank you for entering your name :D');
    }

    if (this.userForm.controls.Age.errors !== null ) {
      console.log('please enter an age');
    } else {
      console.log('thank you for entering your age :D');
    }

    if (this.userForm.controls.Gender.errors !== null ) {
    console.log('please enter a gender');
    } else {
      console.log('thank you for entering your gender :D');
    }

    if (this.userForm.controls.Email.errors !== null ) {
     console.log('please enter an email with the format user@user.com');
    } else {
      console.log(`thank you for entering your email :D`);
    }

    if (this.userForm.controls.Password.errors !== null ) {
      console.log('please enter a Password with a length of 8 characters');
     } else {
       console.log(`thank you for entering your password :D`);
     }

    const formObj = this.userForm.getRawValue();

    this.http.post('http://localhost:7500/', formObj)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('couldn\'t post because', error)
    );

  }


  ngOnInit() {
   }

  }
