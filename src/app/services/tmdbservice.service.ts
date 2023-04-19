import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Movies } from '../models/tmdb';
import { Observable, map } from 'rxjs';
import { User, Users } from '../models/users';
import { PopularMovies, popular } from '../models/popular';
import { Search, searchMovie } from '../models/search';
import { MovieDetails } from '../models/movie-details';
// import { PopularMovies, popularMovie } from '../models/popular';

@Injectable({
  providedIn: 'root'
})
export class TMDBServiceService {

  constructor(private http:HttpClient) { }

  base_url:string='https://api.themoviedb.org/3/'
  api_key:string="5c22bcbd7888afb81b9c03765cba2dc5"
  showdetails?:'week'|'day';
  // -----------------------------------------------------------------TrendingMovie-------------------------------------------------------------------------------
  trendingMovie(data:'day'|'week',show:'tv'|'movie'):Observable<Movie[]>{
    this.showdetails=data
    return this.http.get <Movies> (`${this.base_url}/trending/${show}/${data}`,{
      params:{
        api_key:this.api_key
      }
    }).pipe(map(res=>res.results))

  }
  // -----------------------------------------------------------------User-------------------------------------------------------------------------------
  users(){
    return this.http.get<Users>('https://dummyjson.com/users').pipe(map(res=>res.users))
  }

  // -----------------------------------------------------------------PopularMovie-------------------------------------------------------------------------------
  popularMovie():Observable<popular[]>{
    return this.http.get <PopularMovies>(`${this.base_url}/movie/popular`,{
      params:{
        api_key:this.api_key
      }
    }).pipe(map(res=>res.results))

  }
  // -----------------------------------------------------------------SearchMovie-------------------------------------------------------------------------------

searchMovie(searchMovie:any):Observable<searchMovie[]>{
 return this.http.get<Search>(`${this.base_url}/search/movie`,{
    params:{
      api_key:this.api_key,
      query:searchMovie
    }
  }).pipe(map(res=>res.results))

}
// -----------------------------------------------------------------movieDetails-------------------------------------------------------------------------------
movieDetails(id:string,show:'movie'|'tv'):Observable<MovieDetails>{
 return this.http.get<MovieDetails>(`${this.base_url}/${show}/${id}`,{
    params:{
      api_key:this.api_key
    }
  }).pipe(map(res=>res))
}
// -----------------------------------------------------------------UpComingMovie-------------------------------------------------------------------------------
UpcomingMovie(data:string){
  return this.http.get<any>(`${this.base_url}/movie/${data}`,{
    params:{
      api_key:this.api_key
    }
  }).pipe(map(res=>res.results))
}
}
