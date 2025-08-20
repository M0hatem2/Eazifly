import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
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

  ngOnInit(): void {
    // ✅ هنا تقدر تجيب اللغة الحالية وتحدد الاتجاه
    this.direction = this.currentLang === 'ar' ? 'rtl' : 'ltr';
  }
}
