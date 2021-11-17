import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
  ]
})
export class ErrorPageComponent  {

  templateMenu: MenuItem[] = [
    {
      texto: 'Ir a login',
      ruta: './auth/login'
    },
    {
      texto: 'Ir a registro',
      ruta: './auth/registro'
    },
    {
      texto: 'Ir a listado de heroes',
      ruta: './heroes/listado'
    }
  ]

}
