import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../edit/edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PersonaService]
})
export class EditComponent implements OnInit {
	
	public title: string;
	public persona: Persona;
	public save_project;
	public status: string;
	public url: string;

	constructor(
		private _projectService: PersonaService,
		private _route: ActivatedRoute,
		private _router: Router
	){
		this.title = "Editar Personas";
		this.url = Global.url;
	}

  ngOnInit(){
  	this._route.params.subscribe(params => {
		console.log("id-> ", params.id);
  		let id = params.id;

  		this.getProject(id);
  	});
  }

  getProject(id){
  	this._projectService.getPersona(id).subscribe(
  		response => {
  			this.persona = response;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	)
  }

  onSubmit(){
  	this._projectService.updatePersona(this.persona).subscribe(
		response => {
			this.save_project = response;
			this.status = 'success';
  		},
  		error => {
			this.status = 'failed';
			console.log(<any>error);
  		}
  	);
  }

}
