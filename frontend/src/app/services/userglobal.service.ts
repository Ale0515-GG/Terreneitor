import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto lo registra como un servicio global
})
export class UserglobalService {
  private localStorageKey = 'username'; // Clave para almacenar el nombre de usuario en LocalStorage
  private unidad: number = 0;

  setUserName(username: string) {
    localStorage.setItem(this.localStorageKey, username); // Almacena el nombre de usuario en LocalStorage
  }

  getUserName(): string {
    return localStorage.getItem(this.localStorageKey) || ''; // Obtiene el nombre de usuario desde LocalStorage
  }

  // Agregamos métodos para acceder y modificar la variable "unidad"
  getUnidad(): number {
    return this.unidad;
  }

  setUnidad(value: number) {
    this.unidad = value;
  }
}

