import {Component, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  pizzas: Pizza[];
  constructor(private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.pizzas;
  }
  onChoose(i) {
    this.pizzaService.numberPizza = i;
  }

}