import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is test',
     'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
     new Recipe('A Test Recipe', 'This is test',
     'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
  
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
