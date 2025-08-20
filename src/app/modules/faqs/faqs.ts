import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { ApplicationForm } from "../application-form/application-form";
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'FAQs',
  standalone: true,
  imports: [CommonModule, ApplicationForm, RouterLink, TranslateModule],
  templateUrl: './faqs.html',
  styleUrls: ['./faqs.scss']
})
export class FAQsComponent implements OnInit {
  
  @Input() isHome: boolean = false;
  activeIndex: number | null = null;
  
  constructor(private router: Router, private translate: TranslateService) {}

  faqs = [
    { questionKey: 'FAQS.QUESTIONS.Q1.QUESTION', answerKey: 'FAQS.QUESTIONS.Q1.ANSWER' },
    { questionKey: 'FAQS.QUESTIONS.Q2.QUESTION', answerKey: 'FAQS.QUESTIONS.Q2.ANSWER' },
    { questionKey: 'FAQS.QUESTIONS.Q3.QUESTION', answerKey: 'FAQS.QUESTIONS.Q3.ANSWER' },
    { questionKey: 'FAQS.QUESTIONS.Q4.QUESTION', answerKey: 'FAQS.QUESTIONS.Q4.ANSWER' },
    { questionKey: 'FAQS.QUESTIONS.Q5.QUESTION', answerKey: 'FAQS.QUESTIONS.Q5.ANSWER' },
    { questionKey: 'FAQS.QUESTIONS.Q6.QUESTION', answerKey: 'FAQS.QUESTIONS.Q6.ANSWER' }
  ];
  
  visibleFaqs = this.faqs;

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
