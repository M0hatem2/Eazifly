import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Requests } from "../requests/requests";
import { AdminNav } from "../../shared/admin-nav/admin-nav";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Requests, AdminNav],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
 
}

