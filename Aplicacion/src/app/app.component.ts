import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  nombre = 'Adrian';

  apellido = 'Eguez';

  mostrar = false;

  arregloNumeros = [5, 4, 3, 2, 1];

  nombreImagen = 'universo.jpg';

  anchoImagen = 400;

  cambiarTamanoImagen(tamanoCambio: number) {
    this.anchoImagen += tamanoCambio;
  }

}
