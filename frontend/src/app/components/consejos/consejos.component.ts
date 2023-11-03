import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import {YouTubePlayerModule} from '@angular/youtube-player';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit  {

  videos=[
    {
      video:'9jxUmbLpXBo'
    },
    {
      video:'dmh8JExsNt4'
    },
    {
      video:'0TSi1BY0KJg'
    }, 
    {
      video:'9ydBciIpNQg'
    },
    {
      video:'0YP-mSpe6c8'
    },
    {
      video:'bXVuA8BSrZk'
    }
    
  ]
  constructor(private _youtube:YoutubeService){
  
}
ngOnInit(): void {
 
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
   
}
}
