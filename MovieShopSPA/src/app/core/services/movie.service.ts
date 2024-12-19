import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCard } from '../../shared/models/movieCard';
import { Movie } from '../../shared/models/movie';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Dependency Injection
  constructor(private http: HttpClient) {}

  //c#:
  // private HttpClient http {get; set;}

  // home component =>
  // Always Services always return Observables
  getTopRatedMovies(): Observable<MovieCard[]> {
    // call API to get lists of top movies
    // HttpClient => XMLHttpRequest
    // http get
    // https://localhost:7091/api/Movie/TopRated => JSON
    // convert JSON data to TypeScript Models and return
    return this.http.get<MovieCard[]>(
      //'https://localhost:7091/api/Movie/TopRated'
      `${environment.baseUrl}Movie/TopRated`
    );

    //return this.http.get("https://localhost:7091/api/Movie/TopRated").pipe(map(res => res as MovieCard[]));

    // rxjs -> js LINQ
    // map ==> select
  } 

  getMovieDetails(id: number): Observable<Movie> {
    // call API methods that returns movie details
    
    var movie = this.http.get<Movie>(`${environment.baseUrl}Movie/${id}`);
    console.log(movie);
    return movie;
  }
}
// private http: HttpClient
// private HttpClient http; in C#
