import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
    selector: 'app-users',
    //providers: [UserService],
    templateUrl: 'users.component.html',
    styleUrls: [
        'users.component.css'
    ]
})

export class UsersComponent implements OnInit {
    title = 'Users'
    public users: User[] = [];

    constructor(private service: UserService) {
        //const svs = new UserService();

    }

    ngOnInit() {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User) {
        console.log(this.service);
        this.service.deleteUser(user);
    }

    onAddUser(user: User) {
        console.log(this.service);
        this.service.addUser(user);
    }

}