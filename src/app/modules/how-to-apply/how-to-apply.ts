import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { CommonModule } from '@angular/common';
import { ApplicationForm } from "../application-form/application-form";
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-how-to-apply',
  imports: [CommonModule, ApplicationForm, TranslateModule],
  templateUrl: './how-to-apply.html',
  styleUrl: './how-to-apply.scss'
})
export class HowToApply {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  isHomee(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return typeof window !== 'undefined' && window.location.pathname === '/' || window.location.pathname === '/home';
    }
    return false;
  }
}
