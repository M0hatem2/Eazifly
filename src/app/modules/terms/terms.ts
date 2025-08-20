import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ApplicationForm } from "../application-form/application-form";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core'; // ✅ استدعاء الترجمة

@Component({
  selector: 'app-terms',
  standalone: true, // ✅ لازم تحط دي
  imports: [
    ApplicationForm,
    CommonModule,
    TranslateModule   // ✅ ضيف ده عشان pipe يشتغل
  ],
  templateUrl: './terms.html',
  styleUrls: ['./terms.scss'] // ✅ خليها styleUrls (s مش styleUrl)
})
export class Terms {
  isBrowser: boolean;
  currentLang: string = 'en';
  direction: 'ltr' | 'rtl' = 'ltr';

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // ✅ نتأكد شغال في المتصفح ولا السيرفر
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
