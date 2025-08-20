import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { BtnStart } from "../../shared/btn-start/btn-start";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [BtnStart, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private translate: TranslateService) {
    // اللغة الافتراضية
    this.translate.setDefaultLang('en');

    // استخدام لغة معينة
    this.translate.use('en');
  }
}
