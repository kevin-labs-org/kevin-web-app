import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-landing-screen',
  styleUrl: './landing-screen.css',
  templateUrl: './landing-screen.html',
})
export class LandingScreen {
  private readonly translateService = inject(TranslateService);
}
