import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/movieCard';
import { NgFor } from '@angular/common';
import { MovieCardComponent } from "../shared/components/movie-card/movie-card.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // Dependency Injection
  constructor(private movieService: MovieService) {}

  movieCards!: MovieCard[];

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe(
      m => {
        this.movieCards = m;
        console.log("inside home component OnInit Methods");
        console.table(this.movieCards);
      }
    )
  }
}
