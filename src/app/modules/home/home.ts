import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { Header } from "../header/header";
import { HowToApply } from "../how-to-apply/how-to-apply";
import { GetSupport } from "../get-support/get-support";
import { Packages } from "../packages/packages";
import { ApplicationForm } from "../application-form/application-form";
import { FAQs } from "../faqs/faqs";
import { Footer } from "../../shared/footer/footer";
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Header,
    HowToApply,
    GetSupport,
    Packages,
    ApplicationForm,
    FAQs,
    Footer,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  isAdminRoute(): boolean {
    return this.currentRoute.startsWith('/admin');
  }
}
