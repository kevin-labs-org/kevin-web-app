import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@/navbar/navbar';
import { ZardSonnerComponent } from '@/shared/components/sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ZardSonnerComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.html',
})
export class App {}
