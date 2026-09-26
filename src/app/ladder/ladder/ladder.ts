import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { ZardButtonComponent } from '@/shared/components/button';
import { Region } from '@/region';

@Component({
  imports: [RouterOutlet, ZardDropdownImports, ZardButtonComponent],
  selector: 'app-ladder',
  styleUrl: './ladder.css',
  templateUrl: './ladder.html',
})
export class Ladder {
  protected readonly regionLabel = {
    [Region.NA]: 'North America',
    [Region.EUW]: 'Europe West',
    [Region.KR]: 'Korea',
  };

  protected readonly regions = [Region.NA, Region.EUW, Region.KR];

  protected readonly currentRegion = input.required<string>();
}
