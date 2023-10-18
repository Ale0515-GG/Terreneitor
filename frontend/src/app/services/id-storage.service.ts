import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdStorageService {
  private globalID: string | null = null;

  setID(id: string) {
    this.globalID = id;
  }

  getID(): string | null {
    return this.globalID;
  }
}
