import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [
    trigger('chatAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class ChatBotComponent {
  isChatOpen = false;
  newMessage = '';
  messages: { text: string, sender: 'me' | 'bot' }[] = [];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'me' });
      this.newMessage = "";
      // رد تلقائي بعد ثانية
      setTimeout(() => {
        this.messages.push({ text: "Got it! We’ll reply soon.", sender: 'bot' });
      }, 1000);
    }
  }
}
