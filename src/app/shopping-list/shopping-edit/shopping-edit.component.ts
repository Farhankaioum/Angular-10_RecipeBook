import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameRefInput: ElementRef;
  @ViewChild('quantityInput', {static: true}) quantityRefInput: ElementRef;

  @Output() ingredientShoppingListAdded = new EventEmitter<Ingredient>();
 

  constructor() { }

  ngOnInit(): void {
  }

  AddShoppingList(){
    const productName = this.nameRefInput.nativeElement.value;
    const productQuantity = this.quantityRefInput.nativeElement.value;

    const newIncredient = new Ingredient(productName, productQuantity);
    this.ingredientShoppingListAdded.emit(newIncredient);
  }

}
