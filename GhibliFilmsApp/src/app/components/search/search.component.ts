import { Component } from '@angular/core';
import { GhibliFilmsService } from 'src/app/services/ghibli-films.service';

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

  search(termino: string) {
    this.loading = true;
    if (termino) {
      this.filmsFilter = this.films.filter(it => {
        return it['title'].toLocaleLowerCase().includes(termino);
      });
    } else {
      this.filmsFilter = this.films;
    }
    this.loading = false;

  }
}
