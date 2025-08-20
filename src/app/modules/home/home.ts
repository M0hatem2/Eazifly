import { Component, OnInit } from '@angular/core';
import { Header } from "../header/header";
import { HowToApply } from "../how-to-apply/how-to-apply";
import {  GetSupportComponent } from "../get-support/get-support";
import { Packages } from "../packages/packages";
import { ApplicationForm } from "../application-form/application-form";
import { FAQsComponent } from "../faqs/faqs";
import { Footer } from "../../shared/footer/footer";
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    HowToApply,
    Packages,
    ApplicationForm,
    FAQsComponent,
    Footer,
    CommonModule,
    GetSupportComponent,
    
],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  currentRoute: string = '';
  currentLang: string = 'en';

  constructor(
    private router: Router,
    private translationService: TranslationService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = (event as NavigationEnd).urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    this.translationService.initializeTranslation();
    this.currentLang = this.translationService.getCurrentLanguage();
  }

  isAdminRoute(): boolean {
    return this.currentRoute.startsWith('/admin');
  }

  changeLanguage(lang: string): void {
    this.translationService.setLanguage(lang);
    this.currentLang = lang;
  }
}
 