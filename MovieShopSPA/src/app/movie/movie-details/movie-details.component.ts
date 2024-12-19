import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // DI
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  id: number = 0;
  movie!: Movie;

  ngOnInit(): void {
    // get Id from URL
    // Go to MovieService, call getMovieDetails => Observable<Movie>
    // mapping
    this.route.paramMap.subscribe((p) => {
      this.id = Number(p.get('id'));
      console.log('Movie ID from URL:' + this.id);
    });

    this.movieService.getMovieDetails(this.id).subscribe((m) => {
      this.movie = m;
      console.log(
        'init method in movie detail component with movie: ' + this.movie
      );
    });
  }
}
