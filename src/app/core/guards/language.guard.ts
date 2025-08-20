import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TranslationService } from '../services/translation.service';

export const languageGuard: CanActivateFn = (route, state) => {
    const translationService = inject(TranslationService);

    // ✅ لو موجودة في localStorage استعملها، لو مش موجودة خليه 'en'
    let savedLang = 'en';

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            savedLang = storedLang;
        } else {
            localStorage.setItem('lang', savedLang); // أول مرة بس
        }
    }

    // ✅ خلي الـ TranslationService يطبق اللغة ويحط الـ dir
    translationService.setLanguage(savedLang);

    return true;
};
