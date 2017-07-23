import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class TareaService {
  private headers:Headers;
  private url:string;

  constructor(
    private http:Http,
    private auth:AuthService
  ) {
    this.url = "http://localhost:3000/api/v1/tarea";
    let config = {
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    }
    this.headers = new Headers(config);
  }

  public obtenerTareas() {
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public buscarTarea(idTarea:any) {
    let uri = `${this.url}/${idTarea}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public nuevoTarea(tarea:any) {
    let data = JSON.stringify(tarea);
    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class ContactoService {
  private headers:Headers;
  private url:string;

  constructor(
    private http:Http,
    private auth:AuthService
  ) {
    this.url = "http://localhost:3000/api/v1/contacto";
    let config = {
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    }
    this.headers = new Headers(config);
  }

  public obtenerTareas() {
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public buscarTarea(idTarea:any) {
    let uri = `${this.url}/${idTarea}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public nuevoTarea(tarea:any) {
    let data = JSON.stringify(tarea);
    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }










}
