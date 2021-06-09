import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 *  Generic card component for showing elements
 */
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [],
})
export class CardsComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  /**
   *  redirects to an specific item information
   *
   * @param item that the information will be shown
   */
  seeFilm(item: any) {
    const itemId = item.id;
    this.router.navigate(['/film', itemId]);
  }
}
