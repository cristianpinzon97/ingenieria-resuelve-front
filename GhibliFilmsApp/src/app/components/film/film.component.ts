import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GhibliFilmsService } from '../../services/ghibli-films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [],
})
export class FilmComponent {
  film: any = {};
  loading: boolean;
  error: boolean;
  menssageError = `There were an error calling the films service,
  refresh the page or try it later.
  Message Error: `;

  constructor(
    private activateRoute: ActivatedRoute,
    private ghibliFilmsService: GhibliFilmsService
  ) {
    this.loading = true;
    this.activateRoute.params.subscribe((params: any) => {
      this.ghibliFilmsService.getFilm(params['id']).subscribe(
        (data: any) => {
          this.film = data;
          this.loading = false;
        },
        (errorService) => {
          this.error = true;
          this.loading = false;
          this.menssageError = this.menssageError.concat(errorService.message);
        }
      );
    });
  }
}
