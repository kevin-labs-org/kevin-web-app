import { Pipe, PipeTransform } from '@angular/core';
import { Region } from './region';

const regionLabels: Record<Region, string> = {
  [Region.NA]: 'North America',
  [Region.EUW]: 'Europe West',
  [Region.KR]: 'Korea',
};

@Pipe({
  name: 'region',
  standalone: true,
})
export class RegionPipe implements PipeTransform {
  transform(region: Region): string {
    return regionLabels[region];
  }
}
