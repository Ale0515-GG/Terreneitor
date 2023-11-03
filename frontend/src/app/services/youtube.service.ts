import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url:string ="https://www.googleapis.com/youtube/v3/search";
  private api_key: string = "AIzaSyAXKjMUVkhz0aSZOtPumvL_nklg4ZmlAu8";
  private canal:string="UCgnP5ROVFqSAMnoJjVbOcFg";

  constructor(private _http:HttpClient) { }
  obtenerVideos(){
    const parametros = new HttpParams().set('part','snippet').set('channelID',this.canal).set('maxReult','10').set('key',this.api_key);
    let vinculos=`${this.url}/search`;
    return this._http.get(vinculos,{params:parametros}).pipe(map(resp=>resp));
  }


}
