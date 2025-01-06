import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {FoyerListComponent} from "./foyer-list/foyer-list.component";
import {ChambresComponent} from "./chambres/chambres.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";

export const routes: Routes = [
  {path : "" , component : HomePageComponent , pathMatch : "full"} ,
   {path : "foyer" , component : FoyerListComponent} ,
   {path : "chambre" , component : ChambresComponent} ,
   {path : "etudiant" , component : EtudiantComponent} ,
];
