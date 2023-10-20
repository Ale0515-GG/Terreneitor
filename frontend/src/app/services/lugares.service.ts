import { MapaService } from './mapa.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Feature, PlacesResponse } from "../interfaces/lugares";
import { LugaresApi } from '../api/lugaresApi';

@Injectable({
  providedIn: 'root'
})

export class LugaresService {
  public useLocation?: [number, number];

  public isLoadingPlaces: boolean = false;

  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private lugaressApi: LugaresApi,
    private mapaService : MapaService
    ) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se puede obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }


  getPlacesByQuery(query: string = ''): void {
    // TODO: Evaluar cuando el query es nulo
    if(query.length==0){
      this.places=[];
      this.isLoadingPlaces = false;
      return;
    }


    if (!this.useLocation) throw Error('No hay userLcation')
    this.isLoadingPlaces = true;

    this.lugaressApi.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity: this.useLocation?.join(',')

      }
    })
      .subscribe(resp => {
        this.places = resp.features;
        this.isLoadingPlaces = false;
        console.log(resp.features);

        this.mapaService.createMarkersFromPlaces(this.places, this.useLocation!);

      });
  }


}
