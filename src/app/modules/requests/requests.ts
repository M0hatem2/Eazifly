import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './requests.html',
  styleUrls: ['./requests.scss']
})
export class Requests {
  page = 1;
  pageSize = 5; // عدد الصفوف الافتراضي
  total = 0;
  fromDate: string = '';
  toDate: string = '';
  statusFilter: string = 'All';
  typeFilter: string = 'All';

  Math = Math;
  requests: any[] = [
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
    }
  ];

  constructor() {
    this.total = this.requests.length;
  }

  exportData(): void {
    // 1. إعداد البيانات للتصدير
    // ننشئ مصفوفة جديدة تحتوي فقط على البيانات التي نريد تصديرها
    const dataToExport = this.requests.map(request => ({
      'معرف الطلب': request.id,
      'الاسم': request.name,
      'رقم IBAN': request.iban,
      'النوع': request.type,
      'رقم الهاتف': request.phone,
      'المبلغ المطلوب': request.amount,
      'نسبة المساعدة': request.percentage + '%',
      'قيمة المساعدة': request.helpAmount,
      'الحالة': request.status,
      'تاريخ الإرسال': request.date
    }));

    // 2. تحويل البيانات إلى ورقة عمل في Excel
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

    // 3. إنشاء كتاب عمل (workbook) وإضافة ورقة العمل إليه
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'بيانات الطلبات');

    // 4. كتابة الملف في صيغة Excel (XLSX)
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // 5. حفظ الملف على جهاز المستخدم باستخدام FileSaver
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'بيانات_الطلبات_' + new Date().getTime() + '.xlsx');
  }
  // ✅ Map للألوان
  statusClassMap: Record<string, string> = {
    DONE: 'bg-green-100 text-green-800',
    WAITING: 'bg-yellow-100 text-yellow-800',
    DECLINED: 'bg-red-100 text-red-800'
  };

  statusClass(status: string) {
    return this.statusClassMap[status] || 'bg-gray-100 text-gray-800';
  }

  // ✅ بيانات الصفحة الحالية
  get paginatedRequests() {
    const start = (this.page - 1) * this.pageSize;
    return this.requests.slice(start, start + this.pageSize);
  }

  // ✅ تحكم في الصفحات
  firstPage() {
    this.page = 1;
  }

  lastPage() {
    this.page = Math.ceil(this.total / this.pageSize);
  }

  nextPage() {
    if (this.page < Math.ceil(this.total / this.pageSize)) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.page = 1; // ارجع لأول صفحة
  }

  // ✅ Events
  viewRequest(req: any) {
    console.log("View Request:", req);
  }

  editRequest(req: any) {
    console.log("Edit Request:", req);
  }

  deleteRequest(req: any) {
    if (confirm(`هل انت متأكد انك عايز تمسح الطلب رقم #REQ-${req.id} ؟`)) {
      this.requests = this.requests.filter(r => r.id !== req.id);
      this.total = this.requests.length;
      if (this.page > Math.ceil(this.total / this.pageSize)) {
        this.page = Math.max(1, this.page - 1);
      }
    }
  }


  filteredRequests = [...this.requests];

  // function لتطبيق الفلاتر
  applyFilters() {
    this.filteredRequests = this.requests.filter(req => {
      const matchStatus = this.statusFilter === 'All' || req.status === this.statusFilter;
      const matchType = this.typeFilter === 'All' || req.type === this.typeFilter;
      const matchDate =
        (!this.fromDate || req.date >= this.fromDate) &&
        (!this.toDate || req.date <= this.toDate);

      return matchStatus && matchType && matchDate;
    });
  }
  searchQuery: string = '';
  notifications: { message: string, time: string }[] = [
    { message: 'New request submitted', time: '10:00 AM' },
    { message: 'Payment approved', time: '11:30 AM' },
    { message: 'Reminder: Meeting at 3PM', time: '1:00 PM' }
  ];
 showNotifications: boolean = false;

  // البحث
  onSearch() {
    console.log('Search query:', this.searchQuery);
    // هنا ممكن تضيف logic للفلترة أو استدعاء API
  }

  // فتح/إغلاق Notifications dropdown
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }



}
