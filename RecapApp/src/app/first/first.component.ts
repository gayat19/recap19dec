
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  myForm:FormGroup;
  constructor(public userService:UserService,private myroute:Router) {
    this.myForm = new FormGroup({
        "id":new FormControl(null,[Validators.required,Validators.pattern("[U][0-9][0-9][0-9]")]),
        "name":new FormControl(null,Validators.required)
    });
   }

public get id() : any {
  return this.myForm.get("id");
}
public get name() : any {
  return this.myForm.get("name");
}
createUser(){
  var user:User;
  user = new User();
  user.id = this.id.value;
  user.name = this.name.value;
  this.userService.addUser(user);
  this.myroute.navigate(["sec"]);

}
  ngOnInit(): void {
  }

}
