import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../models/persona';
import { Global } from './global';

@Injectable()
export class PersonaService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	savePersona(persona: Persona): Observable<any>{
		let params = JSON.stringify(persona);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'persona', params, {headers: headers});
	}

	getPersonas(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		console.log('personas consultadas');
		return this._http.get(this.url+'persona', {headers: headers});
	}

	getPersona(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'persona/'+id, {headers: headers});
	}

	deletePersona(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'persona/'+id, {headers: headers});
	}

	updatePersona(persona): Observable<any>{
		let params = JSON.stringify(persona);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'persona/'+persona.id, params, {headers: headers});
	}

	updateProcess(): Observable<any> {
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'persona/procesados', {headers: headers}, {responseType: 'text'});
	}

}
