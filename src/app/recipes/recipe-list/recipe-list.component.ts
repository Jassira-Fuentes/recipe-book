import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This es simply a test', 'https://therecipecritic.com/wp-content/uploads/2020/10/air_fryer_chicken_breast.jpg'),
    new Recipe('A Test Recipe', 'This es simply a test', 'https://therecipecritic.com/wp-content/uploads/2020/10/air_fryer_chicken_breast.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
