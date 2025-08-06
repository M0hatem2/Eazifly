import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { ApplicationForm } from "../application-form/application-form";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule, Navbar, ApplicationForm, RouterLink],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class FAQs implements OnInit {
  
  @Input() isHome: boolean = false; // نستقبل القيمة من الخارج
  activeIndex: number | null = null;
  constructor(private router: Router) { }

  faqs = [
    {
      question: 'Are there any guarantees required to obtain support?',
      answer: `No, we do not require any guarantees. All we need from you is to fill out the form with basic information such as your name, mobile number, IBAN, and the bank you are affiliated with. We will not ask for any official documents, guarantors, or complex paperwork. The aim of the service is to facilitate access to financial support in the simplest way possible.`,
    },
    {
      question: 'What is your cancellation policy?',
      answer: `You can cancel your order within 24 hours of submission for a full refund. After that, you will need to discuss your request with us directly.`,
    },
    {
      question: 'Do you offer customer support?',
      answer: `Yes, we provide customer support around the clock via live chat and email.`,
    },
    {
      question: 'How are subscription fees calculated?',
      answer: `Subscription fees are calculated based on the services you choose. We offer various packages to suit different needs, and you can find detailed pricing information on our website.`,
    },
    {
      question: 'Is there a maximum amount I can request support for?',
      answer: `Yes, the maximum amount you can request support for depends on your specific circumstances and the type of financial support you are seeking. We will assess your application to determine the appropriate amount.`,
    },
    {
      question: 'Is the service only available to Saudi citizens?',
      answer: `No, our service is available to all individuals who meet the eligibility criteria`,
    },
  ];
  visibleFaqs: { question: string; answer: string }[] = [];

  ngOnInit() {
    this.visibleFaqs = this.isHome ? this.faqs.slice(0, 3) : this.faqs;
  }

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  isHomee(): boolean {
    return this.router.url === '/home' || this.router.url === '';
  }
}
