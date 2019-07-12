import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCheck } from '../User';

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

  constructor() {
    this.check = new UserCheck();
  }

  submit(event: Event) {

    const Usr = this.check.getInfo(
                  this.userForm.controls.Name.value,
                  this.userForm.controls.Age.value,
                  this.userForm.controls.Gender.value,
                  this.userForm.controls.Email.value,
                  );

    if (this.userForm.controls.Name.errors !== null ) {
       console.log('please enter a name');
    } else {
      console.log('thank you for entering your name :D');
    }

    if (this.userForm.controls.Age.errors !== null ) {
      console.log('please enter a age');
    } else {
      console.log('thank you for entering your name :D');
    }

    if (this.userForm.controls.Gender.errors !== null ) {
    console.log('please enter a gender');
    } else {
      console.log('thank you for entering your name :D');
    }

    if (this.userForm.controls.Email.errors !== null ) {
     console.log('please enter a email');
    } else {
      console.log('thank you for entering your name :D');
    }
  }

  ngOnInit() {
  }

}
