import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

cliente: Cliente[] = [
  {id: 1,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 2,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 3,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 4,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 5,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 6,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 7,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 8,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 9,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 10,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"},
  {id: 11,nombre:"Joel Gerson", apellido: "Flores de la Rosa ", email:'gerson.dlarosa@gmail.com', createAt:"27/05/200"}

];

  constructor() { }

  ngOnInit(): void {
  }

}
