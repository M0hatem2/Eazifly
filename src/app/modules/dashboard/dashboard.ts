import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Requests } from "../requests/requests";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Requests],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}

