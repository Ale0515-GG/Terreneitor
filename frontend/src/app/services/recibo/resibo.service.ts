
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recibo } from 'src/app/interfaces/resibo';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {

  API_URI = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

 

  getRecibos() {
    return this.http.get(`${this.API_URI}/recibo`);
  }

  getRecibo(id: string) {
    return this.http.get(`${this.API_URI}/recibo/${id}`);
  }

  deleteRecibo(id: string) {
    return this.http.delete(`${this.API_URI}/recibo/${id}`);
  }

  saveRecibo(recibo: Recibo) {
    return this.http.post(`${this.API_URI}/recibo`, recibo);
  }

  updateRecibo(id: string | any, updateRecibo: Recibo): Observable<Recibo> {
    return this.http.put(`${this.API_URI}/recibo/${id}`, updateRecibo); // Corregido aquí
  }
  getRecibosPorUsuario(idUsuario: string) {
    return this.http.get(`${this.API_URI}/recibo/usuario/${idUsuario}`);
  }
  
  
}
