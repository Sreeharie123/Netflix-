import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Movies } from '../models/tmdb';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TMDBServiceService {

  constructor(private http:HttpClient) { }

  base_url:string='https://api.themoviedb.org/3/'
  api_key:string="5c22bcbd7888afb81b9c03765cba2dc5"

  trendingMovie(data:'day'|'week'):Observable<Movie[]>{
    return this.http.get <Movies> (`${this.base_url}/trending/all/${data}`,{
      params:{
        api_key:this.api_key
      }
    }).pipe(map(res=>res.results))

  }

}
