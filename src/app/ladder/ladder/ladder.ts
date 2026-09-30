import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { ZardButtonComponent } from '@/shared/components/button';
import { Region } from '@/region';
import { RegionPipe } from '@/region.pipe';

@Component({
  imports: [RouterOutlet, ZardDropdownImports, ZardButtonComponent, RegionPipe],
  selector: 'app-ladder',
  styleUrl: './ladder.css',
  templateUrl: './ladder.html',
})
export class Ladder {
  protected readonly regions = [Region.NA, Region.EUW, Region.KR];

  protected readonly currentRegion = input.required<string>();
}
