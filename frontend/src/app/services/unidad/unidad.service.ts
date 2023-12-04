import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http

import { Observable } from 'rxjs';
import { Unidad } from '../../interfaces/unidad';


@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  API_URI = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getUnidades() {
    return this.http.get(`${this.API_URI}/unidad`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getUnidad(id: String){
    return this.http.get(`${this.API_URI}/unidad/${id}`); //peticio al id que proporcione
  }

  deleteUnidad(id: String){
    return this.http.delete(`${this.API_URI}/unidad/${id}`);
  }

  saveUnidad(ID: Unidad){
    return this.http.post(`${this.API_URI}/unidad`, ID);
  }
  updateUnidad(id:string|any, updateUnidad:Unidad):Observable<Unidad>{
    return this.http.put(`${this.API_URI}/unidad/${id}`,updateUnidad);

  }
  getUnidadesPorUsuario(idUsuario: number) {
    return this.http.get(`${this.API_URI}/unidad/usuario/${idUsuario}`);
  }
  
}