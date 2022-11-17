import { Component } from '@angular/core';
import { Person } from './person.modell';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 10;
  title = 'my-store';
  name = 'Nicolas';
  age = 18;
  img =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  btnDisable = true;
  register = {
    name: '',
    email: '',
    password: '',
  };
  person = {
    name: 'Nicolas',
    age: 18,
    avatar:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
  };

  myArray: string[] = ['Hola', 'All', 'Mundo!'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };
  peopleArray: Person[] = [
    {
      firstname: 'Freddy',
      lastname: 'Vega',
      age: 35,
      country: 'US',
    },
    {
      firstname: 'Nicolas',
      lastname: 'Molina',
      age: 29,
    },
    {
      firstname: 'Ángela',
      lastname: 'Ocando',
      age: 30,
    },
  ];

  color: string = 'verde';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  toogleButton() {
    this.btnDisable = !this.btnDisable;
    this.person.age += 1;
    this.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  // changeName(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   this.person.name = element.value;
  //   console.log(element.value);
  // }

  addName() {
    this.myArray.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number) {
    this.myArray.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
  }
}
