import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http

import { Observable } from 'rxjs';
import { Unidad } from '../../interfaces/unidad';
import { Recibo } from 'src/app/interfaces/resibo';


@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  API_URI = 'http://192.168.2.148:3001/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getRecibos() {
    return this.http.get(`${this.API_URI}/recibos`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getRecibo(id: String){
    return this.http.get(`${this.API_URI}/recibos/${id}`); //peticio al id que proporcione
  }

  deleteRecibo(id: String){
    return this.http.delete(`${this.API_URI}/recibos/${id}`);
  }

  saveRecibo(ID: Recibo){
    return this.http.post(`${this.API_URI}/recibos`, ID);
  }
  updateRecibo(id:string|any, updateUnidad:Recibo):Observable<Recibo>{
    return this.http.put(`${this.API_URI}/recibos/${id}`,updateUnidad);

  }
}