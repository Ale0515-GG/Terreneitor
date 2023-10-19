import { Injectable } from '@angular/core';
import { Marker,Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})

export class MapaService {

  private map?:Map;
  private markers:Marker[]=[];

  get isMapReady(){
    return !!this.map;
  }

  constructor() { }

  setMap(map:Map){

    this.map=map;

    this.map.on('style.load',()=>{
      
    })
  }

}
