import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Navbar } from "./shared/navbar/navbar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer } from "./shared/footer/footer";
import { NgIf } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ✅ Factory function for translation loader
export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule, // ✅ Import the TranslateModule
    Navbar,
    FontAwesomeModule,
    Footer,
    NgIf
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Eazifly';

  constructor(public router: Router) { }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
