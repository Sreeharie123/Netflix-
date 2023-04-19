import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { searchMovie } from 'src/app/models/search';
import { TMDBServiceService } from 'src/app/services/tmdbservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  math = Math;
  $searchValue?:Observable<searchMovie[]>;
  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  switch:boolean=false
  constructor(private route:ActivatedRoute,private tmdbSercive:TMDBServiceService){}
  ngOnInit(): void {

  this.route.params.subscribe(val=>{
    if(val['id'] == "undefined"){
      this.switch = true
      console.log(val)
      }else{
        this.$searchValue=this.route.params.pipe(switchMap(params=>this.tmdbSercive.searchMovie(params['id'])))

      }
  })

  }



ratingcolor2(rate:number){
  if(rate >= 70 ) return "#204529";
  if(rate >= 50 ) return "#423d0f";
  if(rate <= 49 ) return "#571435";
  return "none"
}

ratingcolor(rate:number){
  if(rate >= 70 ) return "#21d07a";
  if(rate >= 50 ) return "#d2d531";
  if(rate <= 49 ) return "#db2360";
  return "none"
}

}
