const _ = require('underscore')
import {Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: 'moviesFilter'
})

@Injectable()
export class MoviesPipe implements PipeTransform {
  transform(movies: any[], filterValue: string): any[] {
    // handle 'errors'
    if (!filterValue) { return movies; }
    if (filterValue.length < 1) { return movies; }
    // declartions
    const filter: string[] = filterValue.split(/[ ]+/);
    const filterWordCount: number = filter.length;
    function containsString (stringProp, word): boolean {
      return stringProp.indexOf(word) >= 0;
    };
    const filtered: any[] = [];
    // iterate all movies passed in
    _.each(movies, (movie) => {
      // iterate all the words passed in to the filter
      const wordMatch: any[] = [];
      _.each(filter, (word) => {
        const lcWord: string = word.toLowerCase();
        let propMatch = false;
        const title: boolean = containsString(movie.title.toLowerCase(), lcWord);
        if (title) { propMatch = propMatch || true; }

        const overview = containsString(movie.overview.toLowerCase(), lcWord);
        if (overview) { propMatch = propMatch || true; }

        const release_date = containsString(movie.release_date.toLowerCase(), lcWord);
        if (release_date) { propMatch = propMatch || true; }

        const rating = containsString(movie.rating.toString().toLowerCase(), lcWord);
        if (rating) { propMatch = propMatch || true; }
        if (propMatch) { wordMatch.push([movie, propMatch, word]); }
      });
      // if the number of word matches are the same as the number of words in the filter then check if the movie can be pushed
      if (wordMatch.length === filterWordCount) {
        _.each(wordMatch, (tern) => {
          // wordMatch is an array of arrays [tern0,tern1] where tern is [movie,match,word]
          if (tern[1] && !_.contains(filtered, tern[0])) {
            filtered.push(tern[0]);
          }
        });
      }
    });
    return filtered;
  }
}
