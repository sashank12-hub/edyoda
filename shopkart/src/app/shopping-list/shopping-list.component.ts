import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[

  new Ingredient('apple',52),
  new Ingredient('tomato',52),
];
  constructor() { }

  ngOnInit(): void {
  }

}
