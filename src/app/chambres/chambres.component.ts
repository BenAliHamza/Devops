import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NgForOf, NgIf } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-chambres',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger('100ms', animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class ChambresComponent {
  chambres: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadChambres();
  }
  getDynamicBackgroundColor(type: string): string {
    switch (type) {
      case 'SIMPLE':
        return '#a8dadc';
      case 'DOUBLE':
        return '#f4a261';
      case 'SUITE':
        return '#e9c46a';
      default:
        return '#f1faee';
    }
  }

  private loadChambres(): void {
    this.httpService.getAllChambre().subscribe(
      (data) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Error fetching chambres:', error);
      }
    );
  }
}
