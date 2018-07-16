import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  // Propiedades
  @Input() nombreBoton: string; // undefined
  // Evento
  @Output() dioClick = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  ejecutarEvento() {
    console.log('emitiendo');
   // this.dioClick.emit();
  }
}
