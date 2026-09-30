import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideZard } from '@/shared/core/provider/providezard';
import { provideClientHydration } from '@angular/platform-browser';
import { provideZardCharts } from '@/shared/components/chart';
import { provideIcons } from '@ng-icons/core';
import { flagEu, flagKr, flagUs } from '@ng-icons/flag-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideZard(),
    provideClientHydration(),
    provideZardCharts(),
    provideIcons({
      flagUs,
      flagEu,
      flagKr,
    }),
  ],
};
