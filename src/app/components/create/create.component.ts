import {Component, OnInit} from '@angular/core';
import {Persona} from '../../models/persona';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PersonaService]
})
export class CreateComponent implements OnInit {

	public title: string;
	public persona: Persona;
	public status: string;

	constructor(
		private _personaService: PersonaService
	){
		this.title = 'Crear Registro';
		this.persona = new Persona('','','','false');
	}

	ngOnInit() {
	}

	onSubmit(form){
		// Guardar datos básicos
		this._personaService.savePersona(this.persona).subscribe(
			response => {
				this.status = 'success';
				form.reset();
			},
			error => {
				this.status = 'failed';
				console.log(<any>error);
			}
		);
	}

}
