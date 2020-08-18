import { Component, OnInit } from '@angular/core';
import { Destino } from '../models/destino.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
 listaviajes:Destino[];
  constructor() { 
    this.listaviajes=[];
  }

  ngOnInit(): void {
  }

  guardar(nom:string,img:string):boolean{
    this.listaviajes.push(new Destino(nom,img));
    console.log(this.listaviajes);
    return false;
  }
}
