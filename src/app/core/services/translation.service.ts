import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('selectedLanguage');
    
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      this.currentLang = savedLang;
    } else if (browserLang && (browserLang === 'ar' || browserLang === 'en')) {
      this.currentLang = browserLang;
    } else {
      this.currentLang = 'en';
    }
    
    this.translate.use(this.currentLang);
    this.setDocumentDirection();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
    localStorage.setItem('selectedLanguage', language);
    this.setDocumentDirection();
  }

  private setDocumentDirection(): void {
    const html = document.documentElement;
    if (this.currentLang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
    }
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }

  isRTL(): boolean {
    return this.currentLang === 'ar';
  }
}
