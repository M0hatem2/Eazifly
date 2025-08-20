import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Navbar } from "./shared/navbar/navbar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer } from "./shared/footer/footer";
import { NgIf, isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './core/services/translation.service';
import { ChatBotComponent } from "./shared/chat-bot/chat-bot.component";
import { filter } from 'rxjs';
import { SpinnerComponent } from "./shared/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    Navbar,
    FontAwesomeModule,
    NgIf,
    ChatBotComponent,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  currentRoute: string = '';

  constructor(
    private translationService: TranslationService,
    private router: Router // ✅ Inject Router
  ) { }

  ngOnInit(): void {
    this.translationService.initializeTranslation();

    // ✅ تابع التغييرات في الروت
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  isAdminRoute(): boolean {
    return this.currentRoute.includes('/admin');
  }
}