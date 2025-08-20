import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-packages',
  imports: [CommonModule,TranslateModule],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class Packages implements OnInit {
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

  @ViewChild('cardContainer', { static: false }) cardContainer!: ElementRef;
  //translation


  cards = [
    {
      image: 'assets/imges/Frame 2095587099.png',
      title: 'Essentials Package',
      minAmount: '10000',
      maxAmount: '20000',
      percentage: '15',
      fees: '20'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',
      title: 'Standard Package',
      minAmount: '20000',
      maxAmount: '40000',
      percentage: '20',
      fees: '30'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Premium Package',
      minAmount: '40000',
      maxAmount: '60000',
      percentage: '25',
      fees: '40'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: 'assets/imges/Frame 2095587099.png',

      title: 'Business Package',
      minAmount: '60000',
      maxAmount: '80000',
      percentage: '30',
      fees: '50'
    },
    {
      image: './assets/imges/Frame 2095587099.png',

      title: 'Enterprise Package',
      minAmount: '80000',
      maxAmount: '100000',
      percentage: '35',
      fees: '60'
    }
  ];

  scrollLeft() {
    this.cardContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
