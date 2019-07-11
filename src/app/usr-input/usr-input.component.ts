import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserCheck } from '../User';

@Component({
  selector: 'app-usr-input',
  templateUrl: './usr-input.component.html',
  styleUrls: ['./usr-input.component.css']
})
export class UsrInputComponent implements OnInit {
  check: UserCheck;

  userForm = new FormGroup({
    Name: new FormControl(''),
    Age: new FormControl(''),
    Gender: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    Date: new FormControl(''),
    File: new FormControl(''),
  });


  submit(event: Event) {
    console.warn(this.userForm.value);
    const Usr = this.check.getInfo(
                  this.userForm.controls[`Name`].value,
                  this.userForm.controls[`Age`].value,
                  this.userForm.controls[`Gender`].value,
                  this.userForm.controls[`Email`].value,
                  );
    console.log(Usr);
  // console.log(this.userForm.controls[`Name`].value); // Works
  }

  constructor() { }

  ngOnInit() {
  }

}
