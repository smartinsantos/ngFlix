import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../../services/movie.service'

@Component({
  selector: 'nf-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.css']
})
export class ShowcardComponent {
  @Input() movie: Object = {}
  @Output() onRemoved: EventEmitter<any> = new EventEmitter()

  constructor(private movieService: MovieService) {}
  aboutToRemove(movie) {
    movie.aboutToRemove = true;
  }
  removeMovie(movie) {
    this.movieService.remove(movie._id)
    .then((res) => {
      if (!res.error) {
        this.onRemoved.emit(movie._id)
      }
    })
  }
}
