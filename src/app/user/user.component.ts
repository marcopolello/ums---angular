import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onAddUser') userAdded = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  deleteUser(user: User) {
    this.userDeleted.emit(this.user);
  }

  addUser(user: User) {
    this.userAdded.emit(this.user);
  }

}
