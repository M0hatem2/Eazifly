import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-application-form',
  imports: [CommonModule, TranslateModule],
  templateUrl: './application-form.html',
  styleUrl: './application-form.scss'
})
export class ApplicationForm {
  constructor(private router: Router) { }

  isHome: boolean = false; // This can be set based on your routing logic or input
  isFaqs: boolean = false; // This can be set based on your routing logic or input
  isTerms: boolean = false; // This can be set based on your routing logic or input
  isHowToApply: boolean = false; // This can be set based on your routing logic or input

  isHomee(): boolean {
    return this.router.url === '/home' || this.router.url === '';
  }
}
