import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhibliFilmsService {

  constructor(private http: HttpClient) { }

  private getQuery(query: string) {
    const url = `https://ghibliapi.herokuapp.com/${query}`;
    return this.http.get(url);
  }


  getFilms() {
    return this.getQuery('films');
  }
}
