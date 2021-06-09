import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Ghibli films service
 */
@Injectable({
  providedIn: 'root'
})
export class GhibliFilmsService {

  /**
   * Constructor of the service
   *
   * @param http for generating http requests
   */
  constructor(private http: HttpClient) { }

  /**
   * Centrilises the api requests
   *
   * @param query part of the request endpoint
   * @returns an observable object
   */
  private getQuery(query: string) {
    const url = `https://ghibliapi.herokuapp.com/${query}`;
    return this.http.get(url);
  }


  /**
   * Gets all the Ghibli films
   * @returns observable with all the films
   */
  getFilms() {
    return this.getQuery('films');
  }

  /**
   * Gets the information of a film by id
   * @param id of the film
   * @returns an observable with the information of a film
   */
  getFilm(id: string){
    return this.getQuery(`films/${id}`);
  }
}
