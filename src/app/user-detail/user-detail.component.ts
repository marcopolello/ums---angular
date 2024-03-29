import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy!: User;
  private __user!: User;

  @Input() set user(user: User){
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  };

  constructor(private userService: UserService) {
    this.user = new User();
    this.__user = new User();
    this.usercopy = new User();
  }

  get user() {
    return this.__user;
  }

  ngOnInit(): void {
  }
  saveUser() {
    if (this.user.id > 0) {
      console.log(this.user);
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }

    // Let's unbind this.user from previously created/modified user
    this.user = new User();
  }

  resetForm(form: FormGroup) {
    if(this.user.id === 0){
      this.user = new User();
    } else {
      form.reset();
    }
  }
}
