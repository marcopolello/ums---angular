import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  showPizzaForm = false;
  userSelected: User = new User();



  updateUser(user: User) {
    this.showForm = !this.showForm;
    this.userSelected = user;
  }

  createPizza(showPizza:Boolean){
    this.showPizzaForm = !showPizza;
    //console.log(this.showPizzaForm);
  }
}
