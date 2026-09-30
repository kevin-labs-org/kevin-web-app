import { Component, computed, inject, input } from '@angular/core';
import { Champion } from '@/champions/champion';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardFieldImports } from '@/shared/components/field';
import { ZardProgressComponent } from '@/shared/components/progress';
import { ChampionModel } from '@/ddragon/champion-model';
import { ChampionStore } from '@/champions/champion-store';
import { GetChampionsResponse } from '@/champions/get-champions';

@Component({
  imports: [NgOptimizedImage, ZardFieldImports, ZardProgressComponent, DecimalPipe],
  selector: 'app-champion-card',
  styleUrl: './champion-card.css',
  templateUrl: './champion-card.html',
})
export class ChampionCard {
  readonly champion = input.required<Champion>();

  private readonly ddragonService = inject(DdragonService);
  private readonly championStore = inject(ChampionStore);

  private readonly champions = computed(
    () => this.championStore.champions.value() || ({} as GetChampionsResponse),
  );

  protected readonly championImage = computed(() => {
    return this.ddragonService.getChampionLoadingImageUrl(this.champion().championId);
  });

  protected readonly championData = computed(() => {
    return this.ddragonService.getChampion(this.champion().championId) || ({} as ChampionModel);
  });

  protected readonly championDataReady = computed(() => {
    return this.ddragonService.getChampion(this.champion().championId) !== undefined;
  });

  protected readonly winRateBar = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    const high = this.champions().champions.reduce((acc, curr) => Math.max(acc, curr.winRate), 0);
    const low = this.champions().champions.reduce(
      (acc, curr) => Math.min(acc, curr.winRate),
      Infinity,
    );

    return this.computeRelative(this.champion().winRate, high, low);
  });

  protected readonly pickRateBar = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    const high = this.champions().champions.reduce((acc, curr) => Math.max(acc, curr.playRate), 0);
    const low = this.champions().champions.reduce(
      (acc, curr) => Math.min(acc, curr.playRate),
      Infinity,
    );

    return this.computeRelative(this.champion().playRate, high, low);
  });

  protected readonly banRateBar = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    const high = this.champions().champions.reduce((acc, curr) => Math.max(acc, curr.banRate), 0);
    const low = this.champions().champions.reduce(
      (acc, curr) => Math.min(acc, curr.banRate),
      Infinity,
    );

    return this.computeRelative(this.champion().banRate, high, low);
  });

  private computeRelative(x: number, high: number, low: number): number {
    return (x - low) / (high - low);
  }
}
