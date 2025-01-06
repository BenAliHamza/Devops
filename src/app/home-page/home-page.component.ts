import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink , HttpClientModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor() {}


}
