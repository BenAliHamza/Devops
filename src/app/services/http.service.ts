import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



export interface Foyer {
  idFoyer?: number;
  nomFoyer: string;
  capaciteFoyer: number;
  universite?: Universite; // Optional, as it may not always be returned
  blocs?: Bloc[];          // Optional, as it may not always be returned
}

export interface Universite {
  idUniversite: number;
  nomUniversite: string;
  adresse: string;
}

export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capaciteBloc: number;
  foyer?: Foyer;          // Optional, as it may not always be returned
  chambres?: Chambree[];   // Optional, as it may not always be returned
}

export interface Chambree {
  idChambre: number;
  nomChambre: string;
  capaciteChambre: number;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private  http : HttpClient) {
  }

  private readonly baseUrl = 'http://192.168.125.100:8089/Foyer/foyer';
  private readonly baseUrlC = 'http://192.168.125.100:8089/Foyer/chambre';
  private readonly baseUrlE = 'http://192.168.125.100:8089/Foyer/etudiant';

  // Fetch all foyers
  getAllFoyers(): Observable<Foyer[]> {
    const url = `${this.baseUrl}/findAll`;
    return this.http.get<Foyer[]>(url);
  }

  getAllChambre(): Observable<Foyer[]> {
    const url = `${this.baseUrlC}/findAll`;
    return this.http.get<Foyer[]>(url);
  }

  getAllE(): Observable<Foyer[]> {
    const url = `${this.baseUrlE}/findAll`;
    return this.http.get<Foyer[]>(url);
  }
}
