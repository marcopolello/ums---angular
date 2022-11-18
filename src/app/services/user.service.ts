import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import data from '../../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = data;

  getUsers() {

    return this.users;
  }
  createUser(user: UserInterface) {
    this.users.splice(0, 0, {...user});
  }
  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(userUpd: UserInterface) {
    const idx = this.users.findIndex(v => v.id === userUpd.id);

    if(idx !== -1){
      this.users[idx] = {...userUpd};
    } 
  }

}
