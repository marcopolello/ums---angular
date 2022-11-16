
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
import { PizzaService } from '../services/pizza.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit {
  title = 'Users'
  public users: User[] = [];
  @Output('updateUser') updateUser = new EventEmitter<User>();
  @Output('createPizza') createPizza = new EventEmitter<Boolean>();
  constructor(private service: UserService, private servicePizza: PizzaService) {
  }
  showPizzaForm: boolean = false;

  ngOnInit(): void {

    this.users = this.service.getUsers();
  }
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
  onCreatePizza(showPizzaForm:boolean){
    this.showPizzaForm = showPizzaForm;
    //console.log(this.showPizzaForm);
    this.createPizza.emit(this.showPizzaForm);
  }
}
