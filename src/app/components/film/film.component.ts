import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GhibliFilmsService } from '../../services/ghibli-films.service';

/**
 * Film component to manage a film data
 */
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

  /**
   * Constructor for the component Film component
   *
   * @param activateRoute active router
   * @param ghibliFilmsService ghibli fimls service
   */
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
