import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NgForOf, NgIf } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
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
export class EtudiantComponent {
  etudiants: any [] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  private loadEtudiants(): void {
    this.httpService.getAllE().subscribe(
      (data) => {
        this.etudiants = data;
      },
      (error) => {
        console.error('Error fetching etudiants:', error);
      }
    );
  }
}
