import { Component, computed, output, signal } from '@angular/core';
import { Region, RegionList } from '@/region';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { _, translate } from '@ngx-translate/core';
import { REGION_ICON } from '@/region-icon';
import { NgIcon } from '@ng-icons/core';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  imports: [ZardDropdownImports, NgIcon, ZardButtonComponent],
  selector: 'app-region-dropdown',
  styleUrl: './region-dropdown.css',
  templateUrl: './region-dropdown.html',
})
export class RegionDropdown {
  protected readonly selectedRegion = signal<Region>('KR');

  protected readonly selectedRegionIcon = computed(() => REGION_ICON[this.selectedRegion()]);

  readonly regionSelected = output<Region>();

  protected selectRegion(region: Region): void {
    this.selectedRegion.set(region);
    this.regionSelected.emit(region);
  }

  private readonly regionLabels = {
    [Region.KR]: translate(_('regionKR')),
    [Region.NA]: translate(_('regionNA')),
    [Region.EUW]: translate(_('regionEUW')),
  };

  protected readonly regionOptions = [
    ...RegionList.map((region) => ({
      value: region,
      label: this.regionLabels[region],
      icon: REGION_ICON[region],
    })),
  ];
}
