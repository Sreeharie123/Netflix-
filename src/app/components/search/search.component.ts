import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  searchArray?:string[];
  constructor(private route:ActivatedRoute){
      this.route.params.subscribe(value=>{
console.log(value);

        this.searchArray=value['search']

      })
  }

}
