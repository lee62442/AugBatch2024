import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from '../../models/movieCard';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  
  @Input() movieCard! : MovieCard

  ngOnInit(): void {
    
  }
}
