//import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { Person } from '../../core/model/person.model';
//import { Product } from '../../core/model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//export class AppComponent implements OnChanges {
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

  color = 'verde';

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

  imgParent = '';
  imgChild = '';
  showImg = true;
  url = '../../../assets/images/' + this.imgParent + '.jpg';

  onLoaded(img: string) {
    this.imgChild = img;
    console.log('log en el padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
    this.url = '../../../assets/images/' + this.imgParent + '.jpg';
    console.log('url: ' + this.url);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.url = '../../../assets/images/' + this.imgParent + '.jpg';
  //   console.log('url: ' + this.url);
  //   console.log('person name: ' + this.person.name);
  // }
}
