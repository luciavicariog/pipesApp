import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre:'superman',
      vuela: true,
      color: Color.azul
   },
   {
    nombre:'batman',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre:'robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre:'linterna verde',
    vuela: true,
    color: Color.verde
  },
];
  constructor() { }

  ngOnInit(): void {
  }

  toggleMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
