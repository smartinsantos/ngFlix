import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MovieService } from '../../../services/movie.service';
const toastr = require('toastr');

@Component({
  selector: 'nf-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MovieService]
})
export class AddMovieComponent implements OnInit {
  searchText = null;
  suggestions = null;
  showSuggestions = false;
  constructor(private router: Router, private movieService: MovieService) { }
  ngOnInit() {}
  handleSearchMovie(searchText) {
    let query = `title=${searchText}`;
    if (searchText.length > 0) {
      this.movieService.search(query)
      .subscribe(
        (res) => {
          if (!res.error) {
            this.showSuggestions = true;
            this.suggestions = res.data;
          }
        }
      );
    } else {
      this.showSuggestions = false;
      this.suggestions = null;
    }
  }
  handleSuggestionSubmit (suggestion) {
    const movie = {
      title: suggestion.title,
      release_date: suggestion.release_date,
      tmdb_id: suggestion.id,
      rating: suggestion.vote_average,
      overview: suggestion.overview,
      poster_url: suggestion.poster_path ? `http://image.tmdb.org/t/p/w500/${suggestion.poster_path}` : null
    };
    this.movieService.create(movie)
    .subscribe(
      (res) => {
        if (res.error) {
          if (res.message) {
            toastr.warning(`${res.message}`);
          } else {
            toastr.error('Error Ocurred');
          }
        } else {
          this.router.navigate(['', 'main']);
          toastr.info(`Added ' ${res.data.title} '`);
        }
      }
    );
  }
}
