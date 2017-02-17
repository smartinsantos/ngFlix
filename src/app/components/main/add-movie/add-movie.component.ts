import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service'

@Component({
  selector: 'nf-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService]
})
export class AddMovieComponent implements OnInit {
  searchText = null
  suggestions = null
  showSuggestions = false
  constructor(private movieService: MovieService) { }
  ngOnInit() {}
  handleSearchMovie(searchText) {
    let query = `title=${searchText}`
    if (searchText.length > 0) {
      this.movieService.search(query)
      .then((data) => {
        if (data) {
          this.showSuggestions = true
          this.suggestions = data
        }
      })
    }
  }
  handleSuggestionSubmit (suggestion) {
    console.log(suggestion)
    let movie = {
      title: suggestion.title,
      tmdb_id: suggestion.id,
      rating: suggestion.vote_average,
      overview: suggestion.overview,
      poster_url: suggestion.poster_path ? `http://image.tmdb.org/t/p/w500/${suggestion.poster_path}` : null
    }
    this.movieService.create(movie)
    .then((res) => {
      if (res.error) {
        // toastr.error('Error Ocurred')
      } else {
        // browserHistory.push('/main')
        // toastr.success(`Added ' ${res.data.title} '`)
        console.log('saved!', res)
      }
    })
  }
}
