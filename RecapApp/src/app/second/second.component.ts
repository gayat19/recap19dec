import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  users:User[];
  constructor(public userService:UserService) { 
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

}
