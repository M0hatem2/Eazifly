import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SupportRequestForm } from "../../modules/support-request-form/support-request-form";

interface Notification {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterLinkActive, SupportRequestForm, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = false;
  currentRoute: string = '';
  isMenuOpen: boolean = false;
  isAdmin = false;
  currentLang = 'en'; // default
  isModalOpen = false;
  showNotificationList = false;

  navLinks = [
    { path: '/home', label: 'NAVBAR.HOME' },
    { path: '/how-to-apply', label: 'NAVBAR.HOW_TO_APPLY' },
    { path: '/application-form', label: 'NAVBAR.APPLICATION_FORM' },
    { path: '/terms', label: 'NAVBAR.TERMS' },
    { path: '/faqs', label: 'NAVBAR.FAQS' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth >= 992) {
      this.isScrolled = window.scrollY >= window.innerHeight;
    } else {
      this.isScrolled = false;
    }
  }

  notifications: Notification[] = [
    { id: 1, message: 'New user registered', isRead: false, createdAt: new Date() },
    { id: 2, message: 'Server restarted', isRead: false, createdAt: new Date() },
    { id: 3, message: 'New order placed', isRead: true, createdAt: new Date() }
  ];

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang ? savedLang : 'en';
    }

    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
    this.updateHtmlLang();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.isAdmin = this.isAdminRoute();
      }
    });
  }

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', this.currentLang);
      this.updateHtmlLang();
    }
  }

  private updateHtmlLang(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = this.currentLang;
    }
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  isHome(): boolean {
    return this.router.url === '/home' || this.router.url === '';
  }

  // ✅ دالة ترجع اللون حسب الشرط الجديد
  getIconColor(): string {
    if (this.isHome()) {
      return this.isScrolled ? 'black' : 'white';
    }
    return 'black';
  }

  isFaqs(): boolean {
    return this.router.url.includes('/faqs');
  }
  isTerms(): boolean {
    return this.router.url.includes('/terms');
  }
  isHowToApply(): boolean {
    return this.router.url.includes('/how-to-apply');
  }

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  toggleNotifications() {
    this.showNotificationList = !this.showNotificationList;
  }
  markAsRead(id: number) {
    const noti = this.notifications.find(n => n.id === id);
    if (noti) noti.isRead = true;
  }
  markAllAsRead() {
    this.notifications.forEach(n => n.isRead = true);
  }
  deleteNotification(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }
  get unreadCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
  }
}
