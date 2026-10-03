import { Component, inject } from '@angular/core';
import { EDarkModes, ZardDarkMode } from '@/shared/services';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ZardButtonComponent } from '@/shared/components/button';
import { lucideEclipse, lucideMoon, lucideSettings, lucideSun } from '@ng-icons/lucide';
import { LanguageSwitch } from '@/language-switch';
import { Language } from '@/language';
import { _, translate } from '@ngx-translate/core';

@Component({
  imports: [ZardDropdownImports, NgIcon, ZardButtonComponent],
  selector: 'app-settings-button',
  styleUrl: './settings-button.css',
  templateUrl: './settings-button.html',
  viewProviders: [provideIcons({ lucideEclipse, lucideMoon, lucideSettings, lucideSun })],
})
export class SettingsButton {
  private readonly languageSwitch = inject(LanguageSwitch);
  protected readonly darkMode = inject(ZardDarkMode);

  protected switchLanguage(language: Language) {
    this.languageSwitch.switchLanguage(language);
  }

  protected readonly darkModeOptions = [
    {
      value: EDarkModes.SYSTEM,
      label: translate(_('darkMode.system')),
      icon: 'lucideEclipse',
    },
    {
      value: EDarkModes.LIGHT,
      label: translate(_('darkMode.light')),
      icon: 'lucideSun',
    },
    {
      value: EDarkModes.DARK,
      label: translate(_('darkMode.dark')),
      icon: 'lucideMoon',
    },
  ];

  protected readonly languageOptions = [
    { value: Language.ENGLISH, label: translate(_('language.english')) },
    { value: Language.FRENCH, label: translate(_('language.french')) },
  ];
}
