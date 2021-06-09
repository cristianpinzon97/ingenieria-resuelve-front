import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [],
})
export class CardsComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  seeFilm(item: any) {
    const itemId = item.id;
    this.router.navigate(['/film', itemId]);
  }
}
