const _ = require('underscore')
import {Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: 'moviesFilter'
})

@Injectable()
export class MoviesPipe implements PipeTransform {
  transform(movies: any[], filterValue : string): any[] {
    if (!filterValue) { return movies }
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
        let title = containsString(movie.title.toLowerCase(), lcWord)
        if (title) { propMatch = propMatch || true }

        let overview = containsString(movie.overview.toLowerCase(), lcWord)
        if (overview) { propMatch = propMatch || true }

        let release_date = containsString(movie.release_date.toLowerCase(), lcWord)
        if (release_date) { propMatch = propMatch || true }

        let rating = containsString(movie.rating.toString().toLowerCase(), lcWord)
        if (rating) { propMatch = propMatch || true }
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
}
