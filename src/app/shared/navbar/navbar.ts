import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { ApplicationForm } from "../../modules/application-form/application-form";
import { SupportRequestForm } from "../../modules/support-request-form/support-request-form";
interface Notification {
  id: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
}
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, RouterModule, RouterLinkActive, SupportRequestForm],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  currentRoute: string = '';
  isMenuOpen: boolean = false;
  isAdmin = false;



  constructor(private router: Router) {
    
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
    { path: '/home', label: 'Home' },
    { path: '/how-to-apply', label: 'How To Apply' },
    { path: '/application-form', label: 'Application Form' },
    { path: '/terms', label: 'Terms and Conditions' },
    { path: '/faqs', label: 'FAQs' }
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
