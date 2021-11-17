import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.MarvelComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  }

  constructor( private heroeService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private _snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {

    if(! this.router.url.includes('editar') ) {
      return;
    }
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroeId( id ) )
      )
      .subscribe( heroe => this.heroe = heroe )

  }

  guardar() {

    if( this.heroe.superhero.trim().length === 0) {
      return;
    }

    if(this.heroe.id){
      //Actualizar
      this.heroeService.putHeroe( this.heroe )
      .subscribe( heroe => {
        console.log('Actualizando: ', heroe);
        this.mostrarSnackbar('Registro actualizado.');
      })

    } else {
      //Crear
      this.heroeService.postHeroe( this.heroe )
      .subscribe( heroe => {
        console.log('Creando: ', heroe);
        this.mostrarSnackbar('Registro creado.');
        this.router.navigate(['/heroes/editar', heroe.id ]);
      })

    }

  }

  borrar(){
    //deleteHeroe
    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '350px',
      data: {...this.heroe}
    } );

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.heroeService.deleteHeroe( this.heroe.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
            });
        }

      }
    )
  }

  mostrarSnackbar( mensaje: string) {
    
    this._snackBar.open( mensaje, 'Cerrar', {
      duration: 2000
    });
  }

}
