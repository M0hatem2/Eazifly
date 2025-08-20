import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BtnStart } from "../../shared/btn-start/btn-start";
import { TranslationService } from '../../core/services/translation.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-get-support',
  standalone: true,
  imports: [BtnStart, CommonModule, TranslateModule], // ✅ أضف TranslateModule هنا
  templateUrl: './get-support.html',
  styleUrls: ['./get-support.scss']
})
export class GetSupportComponent implements OnInit {
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
