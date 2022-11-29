import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root', //este es el scope
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]); // aca se define el observable

  myCart$ = this.myCart.asObservable(); // esto es un suscriptor
  // en angular si tiene $ al final, significa que es un observable

  // constructor() {}

  addProduct(product: Product) {
    this.myShoppingCart.push(product);

    this.myCart.next(this.myShoppingCart);
    //con el next, se envia la notificacion, a todos los que estan suscritos
    // y se emite un valor, el cual en este caso es la lista de compras.
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
