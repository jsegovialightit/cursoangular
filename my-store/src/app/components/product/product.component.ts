//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../core/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  //@Input('myProduct') product: Product = {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: '',
    //name: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();

  //constructor() {}

  // ngOnInit(): void{

  // }
  // no se debe tener metodos del ciclo de vida vacios

  onAddToCart() {
    // console.log('EN EL HIJO::', this.product);
    this.addedProduct.emit(this.product);
  }
}
