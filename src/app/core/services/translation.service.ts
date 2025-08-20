import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  // The default language for your application.
  private defaultLang = 'en';
  // This property will be true if the application is running in a browser.
  private isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    // Inject PLATFORM_ID to determine where the app is running.
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Assign the result of the check to a property.
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Initializes the translation system.
   * This method should be called once, typically in the main app component.
   */
  initializeTranslation(): void {
    // Return early if not in a browser environment to prevent SSR errors.
    if (!this.isBrowser) {
      this.translate.setDefaultLang(this.defaultLang);
      this.translate.use(this.defaultLang);
      return;
    }

    const savedLang = localStorage.getItem('lang');
    const lang = savedLang || this.defaultLang;

    this.translate.setDefaultLang(this.defaultLang);
    this.translate.use(lang);
    this.setDirection(lang);
  }

  /**
   * Sets the active language for the application.
   * @param language The language code (e.g., 'en', 'ar').
   */
  setLanguage(language: string): void {
    // Only perform this action if in a browser.
    if (!this.isBrowser) {
      return;
    }

    this.translate.use(language);
    localStorage.setItem('lang', language);
    this.setDirection(language);
  }

  /**
   * Gets the current language.
   * @returns The current language code.
   */
  getCurrentLanguage(): string {
    // Return the default language immediately if not in a browser.
    if (!this.isBrowser) {
      return this.defaultLang;
    }
    return this.translate.currentLang || localStorage.getItem('lang') || this.defaultLang;
  }

  /**
   * Sets the text direction (LTR or RTL) on the HTML document.
   * @param lang The language code.
   */
  private setDirection(lang: string): void {
    // Only perform this action if in a browser.
    if (!this.isBrowser) {
      return;
    }

    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}