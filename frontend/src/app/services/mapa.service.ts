import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from "mapbox-gl";
import { Feature } from '../interfaces/lugares';
import { DireccionesApi } from '../api/direccionesApi';
import { DirectionsResponse, Route } from '../interfaces/direcciones';


@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private map?: Map;
  private markers: Marker[] = [];

  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;

    this.map.on('style.load', () => {

    });

  }

  flyto(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('El mapa no está inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    });
  }


  createMarkersFromPlaces(places: Feature[], useLocation: [number,number]) {
    if (!this.map) throw Error('Mapa no inicializado');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];


    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup()
        .setHTML(`
          <h6>${place.text}</h6>
          <span>${place.place_name}</span>
        `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

      newMarkers.push(newMarker);
    }
    this.markers = newMarkers;

    if (places.length == 0) return;

    const bounds = new LngLatBounds();
    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    bounds.extend(useLocation);


    this.map.fitBounds(bounds,{
      padding:200
    })




  }

  constructor(private direccionesApi: DireccionesApi){}


  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    console.log('getRouteBetweenPoints llamada con:', start, end);

    this.direccionesApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
      .subscribe(
        resp => {
          console.log('Respuesta de la API de direcciones:', resp);
          // Llama a la función para dibujar la línea
          this.drawPolyLine(resp.routes[0]);
        },
        error => {
          console.error('Error al obtener la ruta:', error);
        }
      );
  }
  private drawPolyLine(route: Route) {
    console.log('drawPolyLine llamada con la ruta:', route);
    console.log({ kms: route.distance / 1000, duration: route.duration / 60 });

    if (!this.map) throw Error('Mapa no inicializado');

    const coords = route.geometry.coordinates;

    const bounds = new LngLatBounds();
    coords.forEach(([lng, lat]) => {
      bounds.extend([lng, lat]);
    });

    this.map?.fitBounds(bounds, {
      padding: 200
    });

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    };

    if (this.map.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }

    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    });
  }
}
