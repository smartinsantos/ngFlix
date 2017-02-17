import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable()
export class MovieService {
  constructor() { }
  private url = 'http://localhost:5200/api'
  private cAxios = axios.create({ baseURL: this.url })

  getOne (id) {
    return this.cAxios.get(`${this.url}/movies/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  getAll () {
    return this.cAxios.get(`${this.url}/movies/`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  search (query) {
    return this.cAxios.get(`${this.url}/movies/search/data?${query}`)
    .then((res) => {
      return res.data.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  getData (query) {
    return this.cAxios.get(`${this.url}/movies/data/find?${query}`)
    .then((res) => {
      return res.data.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  create (movie) {
    return this.cAxios.post(`${this.url}/movies/`, movie)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  edit (movie) {
    return this.cAxios.put(`${this.url}/movies/${movie._id}`, movie)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }

  remove (id) {
    return this.cAxios.delete(`${this.url}/movies/${id}`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log('Users Api Err: ', err)
      return err
    })
  }
}
