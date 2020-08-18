import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Destino } from '../models/destino.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
@Input() destinos:Destino;
@HostBinding('attr.class') cssClass ='col-md-3';
  constructor() { }

  ngOnInit(): void {
  }

}
