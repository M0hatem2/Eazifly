import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'  
    },
    {
        path: 'home',
        loadComponent: () => import('./modules/home/home').then(m => m.Home)
    },
    {
        path: 'faqs',
        loadComponent: () => import('./modules/faqs/faqs').then(m => m.FAQs)
    },
    {
        path: 'how-to-apply',
        loadComponent: () => import('./modules/how-to-apply/how-to-apply').then(m => m.HowToApply)
    },
    {
        path: 'application-form',
        loadComponent: () => import('./modules/application-form/application-form').then(m => m.ApplicationForm)
    },
    {
        path: 'terms',
        loadComponent: () => import('./modules/terms/terms').then(m => m.Terms)
    },
    {
        path: 'admin',
        loadComponent: () => import('./modules/dashboard/dashboard').then(m => m.Dashboard)
    }
];
