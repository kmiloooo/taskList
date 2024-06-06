import { Component } from '@angular/core';

@Component({
  selector: 'app-form-fruta',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponentFruta {
  fruits: string[] = [];
  newFruitName: string = '';

  addFruit() {
    if (this.newFruitName.trim() !== '') {
      this.fruits.push(this.newFruitName);
      this.newFruitName = '';
    }
  }
}
