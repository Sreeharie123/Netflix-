import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Movies } from '../models/tmdb';
import { Observable, map } from 'rxjs';
import { User, Users } from '../models/users';
import { PopularMovies, popular } from '../models/popular';
// import { PopularMovies, popularMovie } from '../models/popular';

@Injectable({
  providedIn: 'root'
})
export class TMDBServiceService {

  constructor(private http:HttpClient) { }

  base_url:string='https://api.themoviedb.org/3/'
  api_key:string="5c22bcbd7888afb81b9c03765cba2dc5"

  trendingMovie(data:'day'|'week',show:'tv'|'movie'):Observable<Movie[]>{
    return this.http.get <Movies> (`${this.base_url}/trending/${show}/${data}`,{
      params:{
        api_key:this.api_key
      }
    }).pipe(map(res=>res.results))

  }

  users(){
    return this.http.get<Users>('https://dummyjson.com/users').pipe(map(res=>res.users))
  }

  popularMovie():Observable<popular[]>{
    return this.http.get <PopularMovies>(`${this.base_url}/movie/popular`,{
      params:{
        api_key:this.api_key
      }
    }).pipe(map(res=>res.results))

  }
}
