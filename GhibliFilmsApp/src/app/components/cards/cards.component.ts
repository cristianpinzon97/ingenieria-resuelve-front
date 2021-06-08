import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeFilm(item: any) {
    const itemId = item.id;
    console.log(item);
    
    this.router.navigate(['/film', itemId]);
  }
}
