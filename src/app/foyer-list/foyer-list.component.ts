import { Component, OnInit } from '@angular/core';
import { Foyer, HttpService } from '../services/http.service';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-foyer-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ transform: 'translateY(50px)', opacity: 0 }),
          stagger(150, [
            animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class FoyerListComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadFoyers();
  }

  private loadFoyers(): void {
    this.httpService.getAllFoyers().subscribe(
      (data) => {
        this.foyers = data;
      },
      (error) => {
        console.error('Error fetching foyers:', error);
      }
    );
  }

  onFoyerClick(foyer: Foyer): void {
    alert(`You clicked on: ${foyer.nomFoyer}`);
  }
}
