import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DireccionesApi extends HttpClient {
  public baseUrl: string = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string) {
    const fullUrl = this.baseUrl + url;

    const modifiedOptions = {

      params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
        access_token: environment.apikey
      }
    };

    return super.get<T>(fullUrl, modifiedOptions);
  }
}
