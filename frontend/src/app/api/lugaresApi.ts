import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LugaresApi extends HttpClient {
  public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string, options: {
    params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    }
  }) {

    const fullUrl = this.baseUrl + url;


    const modifiedOptions = {
      ...options,
      params: {
        ...(options?.params || {}),
        limit: 5,
        language: 'es',
        access_token: environment.apikey
      }
    };

    return super.get<T>(fullUrl, modifiedOptions);
  }
}
