import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http
import { Usuario } from 'src/app/interfaces/usuario'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getUsuarios() {
    return this.http.get(`${this.API_URI}/usuario`); //o direccion donde estan los pacientes o /Paciente
  }


  getUsuario(id: String){
    return this.http.get(`${this.API_URI}/usuario/${id}`); //peticio al id que proporcione
  }

  deleteUsuario(id: String){
    return this.http.delete(`${this.API_URI}/usuario/${id}`);
  }

  saveUsuario(ID: Usuario){
    return this.http.post(`${this.API_URI}/usuario`, ID);
  }

  updateUsuario(id:string|any, updateUsario:Usuario){
    return this.http.put(`${this.API_URI}/usuario/${id}`,updateUsario);

  }
}