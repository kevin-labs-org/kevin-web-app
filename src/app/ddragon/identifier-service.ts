import { computed, inject, Service } from '@angular/core';
import { JsonDataService } from '@/ddragon/json-data-service';
import { ItemData } from '@/ddragon/item';
import { ChampionS } from '@/ddragon/champion';

@Service()
export class IdentifierService {
  private readonly jsonDataService = inject(JsonDataService);

  private readonly championIdToNameMap = computed(() => {
    const championJson = this.jsonDataService.champion.value();
    const result = new Map<number, string>();

    Object.values(championJson?.data || []).forEach((champion) => {
      result.set(parseInt(champion.key), champion.name);
    });

    return result;
  });

  private readonly championIdToChampionMap = computed(() => {
    const championJson = this.jsonDataService.champion.value();
    const result = new Map<number, ChampionS>();

    Object.values(championJson?.data || []).forEach((champion) => {
      result.set(parseInt(champion.key), champion);
    });

    return result;
  });

  private readonly itemIdToItemMap = computed(() => {
    const itemJson = this.jsonDataService.item.value();
    if (!itemJson) {
      return new Map<number, ItemData>();
    }

    const result = new Map<number, ItemData>();

    Object.values(itemJson?.data || []).forEach((item) => {
      result.set(parseInt(item.key), item);
    });

    return result;
  });

  championIdToName(championId: number): string {
    return this.championIdToNameMap().get(championId) || '';
  }

  itemIdToItem(itemId: number): ItemData | undefined {
    return this.itemIdToItemMap().get(itemId);
  }

  championIdToChampion(championId: number): ChampionS | undefined {
    return this.championIdToChampionMap().get(championId);
  }
}
