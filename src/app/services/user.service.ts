import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Marco1',
      lastname: 'Pol1',
      email: 'Marco@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Venezia',
      phone: '454545455',
      age: 43
    },
    {
      id: 2,
      name: 'Marco2',
      lastname: 'Pol2',
      email: 'Marco@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Venezia',
      phone: '454545455',
      age: 43
    },
    {
      id: 3,
      name: 'Marco3',
      lastname: 'Pol3',
      email: 'Marco@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Venezia',
      phone: '454545455',
      age: 43
    },
    {
      id: 4,
      name: 'Marco4',
      lastname: 'Pol4',
      email: 'Marco@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Venezia',
      phone: '454545455',
      age: 43
    }
  ];

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
