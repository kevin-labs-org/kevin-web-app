import { Component, computed, inject, input } from '@angular/core';
import { Champion } from '@/champions/champion';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardFieldImports } from '@/shared/components/field';
import { ZardProgressComponent } from '@/shared/components/progress';
import { ChampionModel } from '@/ddragon/champion-model';
import { ChampionStore } from '@/champions/champion-store';

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

  protected readonly championImage = computed(() => {
    return this.ddragonService.getChampionLoadingImageUrl(this.champion().championId);
  });

  protected readonly championData = computed(() => {
    return this.ddragonService.getChampion(this.champion().championId) || ({} as ChampionModel);
  });

  protected readonly championDataReady = computed(() => {
    return this.ddragonService.getChampion(this.champion().championId) !== undefined;
  });

  protected readonly winRateBarPercent = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    return this.championStore.champions
      .value()
      ?.champions.reduce((acc, curr) => acc + curr.gamesPlayed, 0);
  });

  protected readonly pickRateBarPercent = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    return this.championStore.champions
      .value()
      ?.champions.reduce((acc, curr) => acc + curr.gamesPlayed, 0);
  });

  protected readonly banRateBarPercent = computed(() => {
    if (!this.championStore.champions.hasValue()) {
      return 0;
    }

    return this.championStore.champions
      .value()
      ?.champions.reduce((acc, curr) => acc + curr.gamesPlayed, 0);
  });
}
