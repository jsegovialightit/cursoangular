import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
    //en el tipado le espcifico que quiero un array del item Product, o sea un array de productos.
    //pero si necesito un detalle de producto, y solo traer un elemento, le sacaria los parentesis rectos.
  }
}
