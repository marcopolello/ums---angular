import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
@Injectable({
    providedIn: 'root'
})

export class UserService {
    public users: User[] = [
        {
            name: 'Hidran1',
            lastname: 'Polello',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran2',
            lastname: 'Polello1',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran3',
            lastname: 'Marco',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        },
        {
            name: 'Hidran4',
            lastname: 'Ciao Pol, come va?',
            email: 'hidran@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Torino',
            phone: '454545455',
            age: 43
        }
    ];


    getUsers() {
        return this.users;
    }

    deleteUser(user: User) {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }

    addUser(user: User) {
        console.log(user);
        let randomUser = {
            name: 'Marco',
            lastname: 'Polello',
            email: 'marco@gmail.com',
            fiscalcode: 'RSAHRN72M22Z444S',
            province: 'Venezia',
            phone: '454545455',
            age: 28
        }
        this.users.push(randomUser);
    }

} 