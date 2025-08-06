import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  imports: [CommonModule],
  templateUrl: './requests.html',
  styleUrl: './requests.scss'
})
export class Requests {
  page = 1;
  pageSize = 10;
  total = 100; // عدل الرقم حسب البيانات

  requests = [
    {
      id: 1,
      name: 'محمد أحمد',
      date: '2025-08-01',
      iban: 'SA4420000000001234567890',
      type: 'قرض اجتماعي',
      phone: '0501234567',
      amount: 5000,
      percentage: 40,
      helpAmount: 2000,
      status: 'DONE'
    },
    {
      id: 2,
      name: 'علي محمد',
      date: '2025-08-02',
      iban: 'SA4420000000000987654321',
      type: 'قرض شخصي',
      phone: '0507654321',
      amount: 10000,
      percentage: 60,
      helpAmount: 3000,
      status: 'WAITING'
    },
    {
      id: 3,
      name: 'سعيد حسن',
      date: '2025-08-03',
      iban: 'SA4420000000001111222233',
      type: 'قرض عائلي',
      phone: '0503333444',
      amount: 15000,
      percentage: 50,
      helpAmount: 7500,
      status: 'DECLINED'
    },
    {
      id: 4,
      name: 'فهد العتيبي',
      date: '2025-08-04',
      iban: 'SA4420000000004444555566',
      type: 'قرض شخصي',
      phone: '0507777888',
      amount: 8000,
      percentage: 30,
      helpAmount: 2400,
      status: 'WAITING'
    },
    {
      id: 5,
      name: 'نورة عبدالعزيز',
      date: '2025-08-05',
      iban: 'SA4420000000009999000011',
      type: 'قرض اجتماعي',
      phone: '0509999000',
      amount: 12000,
      percentage: 45,
      helpAmount: 5400,
      status: 'DONE'
    },
    {
      id: 6,
      name: 'عبدالرحمن خالد',
      date: '2025-08-06',
      iban: 'SA4420000000002222333344',
      type: 'قرض عائلي',
      phone: '0501111222',
      amount: 7000,
      percentage: 35,
      helpAmount: 2450,
      status: 'DECLINED'
    },
    {
      id: 7,
      name: 'منى سالم',
      date: '2025-08-07',
      iban: 'SA4420000000005555666677',
      type: 'قرض شخصي',
      phone: '0504444555',
      amount: 9000,
      percentage: 55,
      helpAmount: 4950,
      status: 'WAITING'
    },
    {
      id: 8,
      name: 'حسين مراد',
      date: '2025-08-08',
      iban: 'SA4420000000008888999900',
      type: 'قرض اجتماعي',
      phone: '0506666777',
      amount: 6000,
      percentage: 20,
      helpAmount: 1200,
      status: 'DONE'
    },
    {
      id: 9,
      name: 'ليلى ماجد',
      date: '2025-08-09',
      iban: 'SA4420000000001111000011',
      type: 'قرض عائلي',
      phone: '0502222333',
      amount: 11000,
      percentage: 25,
      helpAmount: 2750,
      status: 'WAITING'
    },
    {
      id: 10,
      name: 'صالح عبدالمجيد',
      date: '2025-08-10',
      iban: 'SA4420000000003333444455',
      type: 'قرض شخصي',
      phone: '0508888999',
      amount: 9500,
      percentage: 60,
      helpAmount: 5700,
      status: 'DECLINED'
    },
    {
      id: 10,
      name: 'صالح عبدالمجيد',
      date: '2025-08-10',
      iban: 'SA4420000000003333444455',
      type: 'قرض شخصي',
      phone: '0508888999',
      amount: 9500,
      percentage: 60,
      helpAmount: 5700,
      status: 'DECLINED'
    }
  ];


  statusClass(status: string) {
    switch (status) {
      case 'DONE': return 'bg-green-100 text-green-800';
      case 'WAITING': return 'bg-yellow-100 text-yellow-800';
      case 'DECLINED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  nextPage() {
    this.page++;
    // Load more data if needed
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }
}
