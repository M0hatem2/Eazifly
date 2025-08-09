import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { ApplicationForm } from "../../modules/application-form/application-form";
import { SupportRequestForm } from "../../modules/support-request-form/support-request-form";
import { TranslateService, TranslateModule } from '@ngx-translate/core';
interface Notification {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterModule, RouterLinkActive, SupportRequestForm, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  currentRoute: string = '';
  isMenuOpen: boolean = false;
  isAdmin = false;
  currentLang = 'en';

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);

    // ✅ تحديث الاتجاه
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = this.currentLang;
    }
  }



  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // ✅ إعداد اللغة الافتراضية
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);

    // Only access document in browser environment
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = this.currentLang;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  navLinks = [
    { path: '/home', label: 'NAVBAR.HOME' },
    { path: '/how-to-apply', label: 'NAVBAR.HOW_TO_APPLY' },
    { path: '/application-form', label: 'NAVBAR.APPLICATION_FORM' },
    { path: '/terms', label: 'NAVBAR.TERMS' },
    { path: '/faqs', label: 'NAVBAR.FAQS' }
  ];

  isHome(): boolean {
    return this.router.url === '/home' || this.router.url === '';
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
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAdmin = this.isAdminRoute();
      }
    });
  }


  notifications: Notification[] = [
    { id: 1, message: 'New user registered', isRead: false, createdAt: new Date() },
    { id: 2, message: 'Server restarted', isRead: false, createdAt: new Date() },
    { id: 3, message: 'New order placed', isRead: true, createdAt: new Date() }
  ];

  showNotificationList = false;

  // Toggle notification list
  toggleNotifications() {
    this.showNotificationList = !this.showNotificationList;
  }

  // Mark single notification as read
  markAsRead(id: number) {
    const noti = this.notifications.find(n => n.id === id);
    if (noti) noti.isRead = true;
  }

  // Mark all notifications as read
  markAllAsRead() {
    this.notifications.forEach(n => n.isRead = true);
  }

  // Delete single notification
  deleteNotification(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  // Get unread count
  get unreadCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
  }
}
