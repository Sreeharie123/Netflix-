import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/tmdb';
import { TMDBServiceService } from 'src/app/services/tmdbservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movie?:Observable<Movie[]>

  $time = new BehaviorSubject<'day'|'week'>('week');


  imageUrl:string="https://image.tmdb.org/t/p/w500/"

  constructor(private tmdbService:TMDBServiceService){}

  ngOnInit(): void {
    // this.movie=this.$time.next('day')
   this.movie = this.tmdbService.trendingMovie(this.$time.next('day'))

  }


}
















// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Movie } from 'src/app/models/tmdb';
// import { TMDBServiceService } from 'src/app/services/tmdbservice.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   imageUrl:string='https://image.tmdb.org/t/p/w500/'

//   movie?:Movie[]

//   constructor(private tmdbService:TMDBServiceService){}

//   ngOnInit(): void {

//    this.tmdbService.trendingMovie('day').subscribe((data)=>{
//     this.movie=data
//    data.map((data)=>{
//       const {poster_path:imagId}=data
//       const imgURL=`${this.imageUrl}/${imagId}`
//       this.imageObject.push(
//          {thumbImage:imgURL})

//      })

//      console.log(this.imageObject)

//    })

//   }

//   imageObject: Array<object> = [];

// }
