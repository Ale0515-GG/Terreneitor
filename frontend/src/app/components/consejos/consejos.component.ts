import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  constructor(private _youtube:YoutubeService){
    this._youtube.obtenerVideos().subscribe((resp:any)=>{
      console.log(resp);
    });

  }
  ngOnInit(): void {
    
  }
}
