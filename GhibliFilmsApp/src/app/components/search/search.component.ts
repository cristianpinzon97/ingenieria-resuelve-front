import { Component } from '@angular/core';
import { GhibliFilmsService } from 'src/app/services/ghibli-films.service';

/**
 * Search component for getting films information
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  films: any[] = [];
  filmsFilter: any[] = [];
  loading: boolean;
  error: boolean;
  menssageError = `There were an error calling the films service,
  refresh the page or try it later.
  Message Error: `;

  /**
   * Constructor for the search component
   * @param ghibliService ghibli film service
   */
  constructor(private ghibliService: GhibliFilmsService) {
    this.loading = true;
    this.ghibliService.getFilms().subscribe((data: any) => {
      this.films = data;
      this.filmsFilter = data;
      this.loading = false;
    },
    (errorService) => {
      this.error = true;
      this.loading = false;
      this.menssageError = this.menssageError.concat(errorService.message);
    }
  );
  }

  /**
   * Searches  films that match with the term given
   * @param term title of the film
   */
  search(term: string) {
    this.loading = true;
    if (term) {
      this.filmsFilter = this.films.filter(film => {
        return film['title'].toLocaleLowerCase().includes(term.toLowerCase());
      });
    } else {
      this.filmsFilter = this.films;
    }
    this.loading = false;

  }
}
