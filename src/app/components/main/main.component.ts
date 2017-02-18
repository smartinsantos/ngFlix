const _ = require('underscore')
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
  searchFilter(movies, filterValue) {
     if (filterValue.length < 1) { return movies }
  let filter = filterValue.split(/[ ]+/)
  let filterWordCount = filter.length
  let containsString = (stringProp, word) => {
    return stringProp.indexOf(word) >= 0
  }
  let filtered = []
  // iterate all movies passed in
  _.each(movies, (movie) => {
    // iterate all the words passed in to the filter
    let wordMatch = []
    _.each(filter, (word) => {
      let lcWord = word.toLowerCase()
      let propMatch = false
      // title check
      let title = containsString(movie.title.toLowerCase(), lcWord)
      if (title) { propMatch = propMatch || true }
      // year check
      let year = containsString(movie.year.toLowerCase(), lcWord)
      if (year) { propMatch = propMatch || true }
      // genre check
      let genre = containsString(movie.genre.toLowerCase(), lcWord)
      if (genre) { propMatch = propMatch || true }
      // actor check
      let actors = containsString(movie.actors.toLowerCase(), lcWord)
      if (actors) { propMatch = propMatch || true }

      if (propMatch) { wordMatch.push([movie, propMatch, word]) }
    })
    // if the number of word matches are the same as the number of words in the filter then check if the movie can be pushed
    if (wordMatch.length === filterWordCount) {
      _.each(wordMatch, (tern) => {
        // wordMatch is an array of arrays [tern0,tern1] where tern is [movie,match,word]
        if (tern[1] && !_.contains(filtered, tern[0])) {
          filtered.push(tern[0])
        }
      })
    }
  })
  return filtered
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
