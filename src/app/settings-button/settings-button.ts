import { Component, inject } from '@angular/core';
import { EDarkModes, ZardDarkMode } from '@/shared/services';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ZardButtonComponent } from '@/shared/components/button';
import { lucideEclipse, lucideMoon, lucideSettings, lucideSun } from '@ng-icons/lucide';
import { LanguageSwitch } from '@/language-switch';
import { Language } from '@/language';

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
    { value: EDarkModes.SYSTEM, label: 'System', icon: 'lucideEclipse' },
    { value: EDarkModes.LIGHT, label: 'Light', icon: 'lucideSun' },
    { value: EDarkModes.DARK, label: 'Dark', icon: 'lucideMoon' },
  ];

  protected readonly languageOptions = [
    { value: Language.ENGLISH, label: 'English' },
    { value: Language.FRENCH, label: 'French' },
  ];
}
