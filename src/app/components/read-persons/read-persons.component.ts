import {Component, OnInit} from '@angular/core';
import {Persona} from '../../models/persona';
import {PersonaService} from '../../services/persona.service';
import {Global} from '../../services/global';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './read-persons.component.html',
  styleUrls: ['./read-persons.component.css'],
  providers: [PersonaService]
})
export class ReadPersonsComponent implements OnInit {
  public personas: Persona[];
  public filterQuery = '';
  public url: string;
  public rowsOnPage = 10;

  constructor(
  	private _personService: PersonaService, private router: Router
  ){
  	this.url = Global.url;
  }

  ngOnInit(){
  	console.log('inicia consulta de personas');
  	this.getPersonas();
  }

  getPersonas(){
  	this._personService.getPersonas().subscribe(
  		response => {
  			console.log('personas -> ', response);
            this.personas = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

  onProcess() {
    this._personService.updateProcess().subscribe(
        response => {
            console.log('Procesos actualizados -> ', response);
            this.router.navigate(['/personas']).then(() => {window.location.reload();});
        },
        error => {
            console.log('error -> ', <any>error);
        }
    );
  }
}
