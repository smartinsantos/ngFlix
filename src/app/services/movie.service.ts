import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  private url = 'http://localhost:5200/api';
  constructor(private http: Http) {}

  getOne (id) {
    return this.http.get(`${this.url}/movies/${id}`)
    .map((res: Response) => res.json());
  }

  getAll () {
    return this.http.get(`${this.url}/movies/`)
    .map((res: Response) => res.json());
  }

  search (query) {
    return this.http.get(`${this.url}/movies/search/data?${query}`)
    .map((res: Response) => res.json());
  }

  create (movie) {
    return this.http.post(`${this.url}/movies/`, movie)
    .map((res: Response) => res.json());
  }

  remove (id) {
    return this.http.delete(`${this.url}/movies/${id}`)
    .map((res: Response) => res.json());
  }
}
