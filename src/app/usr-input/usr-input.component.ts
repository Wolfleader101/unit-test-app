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
    Name: new FormControl('', [Validators.requiredTrue]),
    Age: new FormControl('', [Validators.requiredTrue, Validators.maxLength(100)]),
    Gender: new FormControl('', [Validators.requiredTrue]),
    Email: new FormControl('', [Validators.email, Validators.requiredTrue]),
    Password: new FormControl('', [Validators.requiredTrue, Validators.minLength(8), Validators.maxLength(50)]),
    Date: new FormControl(''),
    File: new FormControl(''),
  });

  constructor() {
    this.check = new UserCheck();
  }

  submit(event: Event) {
    console.warn(this.userForm.value);
    const Usr = this.check.getInfo(
                  this.userForm.controls[`Name`].value,
                  this.userForm.controls[`Age`].value,
                  this.userForm.controls[`Gender`].value,
                  this.userForm.controls[`Email`].value,
                  );
    console.log(Usr);
    console.log(this.userForm.errors);
  // console.log(this.userForm.controls[`Name`].value); // Works
  }

  ngOnInit() {
  }

}
