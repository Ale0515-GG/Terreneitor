import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  private debounceTimer?:NodeJS.Timeout;

  onQueryChanged(query:string=''){
      if(this.debounceTimer) clearTimeout(this.debounceTimer);

      this.debounceTimer= setTimeout(() =>{
        console.log('Mandar este query: ', query)
      },1000

      );
  }
}
