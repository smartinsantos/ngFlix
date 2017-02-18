import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http'
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'nf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MovieService]
})
export class MainComponent implements OnInit {
  movies = []
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    // fetch movies
    this.fetchMovies()
  }
  fetchMovies() {
    this.movieService.getAll()
    .then(res => this.movies = !res.error ? res.data : this.movies)
  }
  removeFromList(movieId) {
    this.movies.forEach((movie, index) => {
      if (movie._id === movieId) {
        this.movies.splice(index, 1)
        return
      }
    })
  }
}
