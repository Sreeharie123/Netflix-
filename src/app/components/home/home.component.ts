import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/tmdb';
import { TMDBServiceService } from 'src/app/services/tmdbservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      }
    }
  }
  movies?:Observable<Movie[]>
  currentTrend:interval='week'

  $timeFilter = new BehaviorSubject<interval>(this.currentTrend);

  imageUrl:string="https://image.tmdb.org/t/p/w500/"

  constructor(private tmdbService:TMDBServiceService){}

  ngOnInit(): void {

   this.movies = this.$timeFilter.pipe(
    switchMap(time=>this.tmdbService.trendingMovie(time))
   )

  }

  onClick(data:interval){
    this.$timeFilter.next(data)
  }


}

type interval="day"|"week"
