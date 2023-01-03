import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   //VARIABLES
  widthImg = 10;
  name = 'Abril';
  age = 31;
  img = "https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1612831163249-1-768x1024.jpg";
  btnDisabled = true;
  person = {
    name: 'Abril',
    age: 31,
    avatar : "https://planb.mx/wp-content/uploads/2022/04/FB_IMG_1612831163249-1-768x1024.jpg"
  }

  //OBJETO para formulario
  register = {
    name: '',
    email: '',
    password: '',
  }

  //CREAMOS UN ARRAY
  names: string[] = ['Abril','Beto','Ambar'];
  newName = '';

  //CREAMOS UN OBJETO
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  //CREAMOS UN ARRAY DE OBJETOS TIPADO CON LA INTERFACE(MODELO) QUE CREAMOS EN Product.model.ts
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
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  //Método para deshabilitar un botón//
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  //método o evento para incrementar edad
  increaseAge(){
    this.person.age += 1;
  }

  //Método que recibe el evento cuando se baja o sube el scroll
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  //Método que recibe el evento de un input cuando es modificado
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  //METODO QUE AGREGA UN VALOR AL ARREGLO names USANDO EL METODO push
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  //MÉTODO QUE ELIMINA UN REGISTRO DEL ARRAY names
  deleteName(index:number){
    this.names.splice(index,1)
  }

  //Método que imprime lo que se ha llenado en los campos de register//
  onRegister(){
    console.log(this.register);
  }

}
