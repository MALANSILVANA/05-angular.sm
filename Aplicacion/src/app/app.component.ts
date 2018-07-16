import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  nombre = 'Silvana';

  apellido = 'Malan';

  mostrar = false;

  arregloNumeros = [5, 4, 3, 2, 1];

  nombreImagen = 'universo.jpg';

  anchoImagen = 400;

  titulo = '¿Quién está viendo ahora?';

  nombreBoton = 'aDminisTrar perfiles';

  perfiles = [
    {
      id: 1,
      nombrePerfil: 'jason',
      nombreImagen: 'jason.png'
    },
    {
      id: 2,
      nombrePerfil: 'jenny',
      nombreImagen: 'jenny.png'
    },
    {
      id: 3,
      nombrePerfil: 'angie',
      nombreImagen: 'angie.png'
    },
    {
      id: 4,
      nombrePerfil: 'guest',
      nombreImagen: 'guest.png'
    },
    {
      id: 5,
      nombrePerfil: 'stevie',
      nombreImagen: 'stevie.png'
    }
  ];


  cambiarTamanoImagen(tamanoCambio: number) {
    this.anchoImagen += tamanoCambio;
  }

  irAAdministrarPerfiles() {
    console.log('Ir a administrar');
  }

/*@Component({
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
  }*/

}
