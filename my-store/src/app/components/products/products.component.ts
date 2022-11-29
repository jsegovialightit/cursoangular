import { Component, OnInit } from '@angular/core';

import { Product } from '../../core/model/product.model';

import { StoreService } from '../../core/services/store.service';
import { ProductsService } from '../../core/services/products.service';

//import { isNgTemplate } from '@angular/compiler';
// usado para tener un bloque de html condicional con la etiqueta #elseName del else de un ngIf
// https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  //today = new Date(2019, 1, 1);
  today = new Date();
  date = new Date(2020, 1, 21);

  // public products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'Automobil de juguete',
  //     price: 100,
  //     image: '../../../assets/images/toy.jpg',
  //   },
  //   {
  //     id: '2',
  //     name: 'Muñeca de trapo',
  //     price: 180,
  //     image: '../../../assets/images/house.jpg',
  //   },
  //   {
  //     id: '3',
  //     name: 'Pelota de futbol',
  //     price: 120,
  //     image: '../../../assets/images/bike.jpg',
  //   },
  // ];

  constructor(
    private storeService: StoreService, // aqui se esta inyectando el servicio
    private productsService: ProductsService // aqui se esta inyectando el servicio
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    //es el lugar donde manejar las cosas asincronas
    this.productsService.getAllProducts().subscribe((data) => {
      // console.log(data);
      this.products = data;
    });
    //se utiliza subscribe para corresponer al observable

    //OTRA FORMA DE HACERLO
    // this.productsService.getAllProducts().subscribe({
    //   next: (products) => {
    //     this.products = products;
    //   },
    //   error: (error) => {
    //     console.error('Error to get products:: ', error);
    //   },
    //   complete: () => {},
    // });
  }

  onAddToShoppingCart(product: Product) {
    // console.log('EN EL PADRE::', product);
    // this.myShoppingCart.push(product);
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0); //https://platzi.com/cursos/arrays/
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
