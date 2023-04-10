import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/tmdb';
import { TMDBServiceService } from 'src/app/services/tmdbservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  movies?: Observable<Movie[]>;
  $timeFilter = new BehaviorSubject<timeInterval>('day');
  $showFilter = new BehaviorSubject<showInterval>('movie');

  $filter=combineLatest({
    time:this.$timeFilter,
    show:this.$showFilter
  });


  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private tmdbService: TMDBServiceService) {}

  ngOnInit(): void {
    this.movies =this.$filter.pipe(switchMap(({time,show})=>{
     return this.tmdbService.trendingMovie(time,show)
    }))
  }

  onTime(data: timeInterval) {
    this.$timeFilter.next(data);
  }

  onShow(data: showInterval) {
    this.$showFilter.next(data);
  }
}

type timeInterval = 'day' | 'week';
type showInterval = 'tv' | 'movie';
