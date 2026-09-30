import { Component, computed, effect, inject, signal } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button';
import { lucideAsterisk } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ChampionStore } from '@/champions/champion-store';
import { Role, RoleList } from '@/role';
import { GetChampionsRequest } from '@/champions/get-champions';
import { Region, RegionList } from '@/region';
import { ChampionCard } from '@/champions/champion-card/champion-card';
import { ZardToggleGroupComponent, ZardToggleGroupItem } from '@/shared/components/toggle-group';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { RegionPipe } from '@/region.pipe';
import { REGION_ICON } from '@/region-icon';

interface FilterCriteria {
  region: Region | 'ALL';
  role: Role | 'ALL';
}

const DEFAULT_FILTER_CRITERIA: FilterCriteria = {
  region: 'ALL',
  role: 'ALL',
};

const SortCriteria = {
  WIN_RATE: 'WIN_RATE',
  PLAY_RATE: 'PLAY_RATE',
  BAN_RATE: 'BAN_RATE',
};

@Component({
  imports: [
    ZardButtonComponent,
    ChampionCard,
    ZardToggleGroupComponent,
    ZardDropdownImports,
    NgIcon,
  ],
  selector: 'app-champions-tierlist-overview',
  styleUrl: './champion-tierlist-overview.css',
  templateUrl: './champion-tierlist-overview.html',
  providers: [ChampionStore, RegionPipe],
  viewProviders: [provideIcons({ lucideAsterisk })],
})
export class ChampionTierlistOverview {
  private readonly championStore = inject(ChampionStore);
  private readonly regionPipe = inject(RegionPipe);

  protected readonly champions = computed(() => {
    return this.championStore.champions.value()?.champions || [];
  });

  protected readonly filter = signal<FilterCriteria>(DEFAULT_FILTER_CRITERIA);
  protected readonly sort = signal<string>(SortCriteria.WIN_RATE);

  protected readonly regionIcon = computed(() => {
    const region = this.filter().region;
    if (region === 'ALL') {
      return 'lucideAsterisk';
    }

    return REGION_ICON[region];
  });

  constructor() {
    effect(() => {
      const f = this.filter();
      this.championStore.sendRequest(this.makeRequest(f));
    });
  }

  protected setFilterRegion(value: string | undefined): void {
    if (!value) {
      return;
    }

    this.filter.update((curr) => {
      curr.region = value as Region;
      return curr;
    });
  }

  protected setFilterRole(value: string | string[]) {
    this.filter.update((curr) => {
      if (typeof value === 'string' && RoleList.includes(value)) {
        curr.role = value as Role;
      }

      return curr;
    });
  }

  protected sortButtonLabel(value: string) {
    return this.sortOptions.find((o) => o.value === value)?.label || '';
  }

  private makeRequest(filter: FilterCriteria): GetChampionsRequest {
    return {
      region: filter.region,
      role: filter.role,
      patch: '',
    };
  }

  protected readonly RegionList = RegionList;

  protected readonly roles: ZardToggleGroupItem[] = [
    {
      value: Role.TOP,
      label: 'Top',
    },
  ];

  protected readonly sortOptions = [
    { value: SortCriteria.WIN_RATE, label: 'Win Rate' },
    { value: SortCriteria.PLAY_RATE, label: 'Play Rate' },
    { value: SortCriteria.BAN_RATE, label: 'Ban Rate' },
  ];

  protected readonly regionOptions = [
    { value: 'ALL', label: 'All Regions', icon: 'lucideAsterisk' },
    ...RegionList.map((region) => ({
      value: region,
      label: this.regionPipe.transform(region),
      icon: REGION_ICON[region],
    })),
  ];
}
