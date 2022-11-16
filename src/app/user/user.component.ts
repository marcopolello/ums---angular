import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  @Output('onCreatePizza') onCreatePizza = new EventEmitter();
  showPizzaForm: boolean = true;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }
  deleteUser() {

    this.userDeleted.emit(this.user);


  }
  updateUser() {
    //console.log(this.user);
    this.onSelectUser.emit(this.user);

  }

  createPizza() {
    //const pizza = PizzaMaker.create({ name: 'Inferno', toppings: ['cheese', 'peppers'] });
    //console.log(this.showPizzaForm);
    this.showPizzaForm = !this.showPizzaForm;
    this.onCreatePizza.emit(this.showPizzaForm);
  }

  createUser() {
    console.log('');
  }
}
