import { I18nPluralPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
 // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //I18nPluralPipe
  clientes: string[] = ['Laura','Pedro','Pepe','Jose'];

  clientesMapa={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre='Susana';
    this.genero='femenino';
  }

  borrarCliente(){
    this.clientes.shift();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 34,
    direccion: 'Getafe'
  }

  //json pipe
  heroes = [
    {
      nombre:'superman',
      vuela:'true'
    },
    {
      nombre:'aquaman',
      vuela:'true'
    },
    {
      nombre:'robin',
      vuela:'true'
    },
  ];

//Async pipe
  miObservable = interval(1000); //0,1,2...1000

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('Tenemos data');
      },3500 )
  })
}
