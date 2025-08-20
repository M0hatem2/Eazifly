import { Routes } from '@angular/router';
import { languageGuard } from './core/guards/language.guard';

export const routes: Routes = [
    {
        path: '',
        canActivateChild: [languageGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadComponent: () =>
                    import('./modules/home/home').then((m) => m.Home),
            },
            {
                path: 'faqs',
                loadComponent: () =>
                    import('./modules/faqs/faqs').then((m) => m.FAQsComponent),
            },
            {
                path: 'how-to-apply',
                loadComponent: () =>
                    import('./modules/how-to-apply/how-to-apply').then(
                        (m) => m.HowToApply
                    ),
            },
            {
                path: 'application-form',
                loadComponent: () =>
                    import('./modules/application-form/application-form').then(
                        (m) => m.ApplicationForm
                    ),
            },
            {
                path: 'terms',
                loadComponent: () =>
                    import('./modules/terms/terms').then((m) => m.Terms),
            },
            {
                path: 'admin',
                loadComponent: () =>
                    import('./modules/dashboard/dashboard').then((m) => m.Dashboard),
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./auth/login/login.component').then(
                        (m) => m.LoginComponent
                    ),
            },
            {
                path: 'signup',
                loadComponent: () =>
                    import('./auth/signup/signup.component').then(
                        (m) => m.SignupComponent
                    ),
            },
            {
                path: '**',
                loadComponent: () =>
                    import('./modules/error404/error404.component').then(
                        (m) => m.Error404Component
                    ),
            },
        ],
    },
];
