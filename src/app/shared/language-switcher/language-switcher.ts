import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
    selector: 'app-language-switcher',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    template: `
    <div class="flex items-center space-x-2">
      <button 
        *ngFor="let lang of languages"
        (click)="switchLanguage(lang.code)"
        [class.bg-blue-500]="currentLang === lang.code"
        [class.text-white]="currentLang === lang.code"
        [class.bg-gray-200]="currentLang !== lang.code"
        [class.text-gray-700]="currentLang !== lang.code"
        class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200">
        {{ lang.label }}
      </button>
    </div>
  `,
    styles: [`
    button {
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
  `]
})
export class LanguageSwitcherComponent {
    private translationService = inject(TranslationService);

    languages = [
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'العربية' }
    ];

    currentLang = this.translationService.getCurrentLanguage();

    switchLanguage(language: string): void {
        this.translationService.switchLanguage(language);
        this.currentLang = language;
    }
}
