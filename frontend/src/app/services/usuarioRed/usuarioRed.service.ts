import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { usersRed } from 'src/app/interfaces/usersRed';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRedService {
  API_URI = 'http://192.168.2.148:3001/api';

  constructor(private http: HttpClient) { }

  getUsuariosRed(): Observable<usersRed[]> {
    return this.http.get<usersRed[]>(`${this.API_URI}/usersRed`)
      .pipe(catchError(this.handleError));
  }

  getUsuarioRed(id: string): Observable<usersRed> {
    return this.http.get<usersRed>(`${this.API_URI}/usersRed/${id}`)
      .pipe(catchError(this.handleError));
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/usersRed/${id}`)
      .pipe(catchError(this.handleError));
  }

  saveUsuarioRed(usersRed: usersRed): Observable<usersRed> {
    return this.http.post<usersRed>(`${this.API_URI}/usersRed`, usersRed)
      .pipe(catchError(this.handleError));
  }

  // Corregir el parámetro a id en lugar de nombre
  updateNombreRed(id: string, nombre: string): Observable<usersRed> {
    return this.http.put<usersRed>(`${this.API_URI}/usersRed/${id}`, { nombre })
      .pipe(catchError(this.handleError));
  }

  updateUsuarioRed(id: number, usersRed: usersRed): Observable<usersRed> {
    return this.http.put<usersRed>(`${this.API_URI}/usersRed/${id}`, usersRed)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Ocurrió un error en la solicitud:', error);
    return throwError(error);
  }
}
