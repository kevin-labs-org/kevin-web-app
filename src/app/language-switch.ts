import { inject, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageSwitch {
  private readonly translate = inject(TranslateService);

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
