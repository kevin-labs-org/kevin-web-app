import { computed, inject, Service } from '@angular/core';
import { JsonDataService } from '@/ddragon/json-data-service';
import { ItemData } from '@/ddragon/item';
import { ChampionS } from '@/ddragon/champion';

@Service()
export class IdentifierService {
  private readonly jsonDataService = inject(JsonDataService);

  private readonly championIdToChampionMap = computed(() => {
    const championJson = this.jsonDataService.champion.value();
    const result = new Map<string, ChampionS>();

    Object.values(championJson?.data || []).forEach((champion) => {
      result.set(champion.key, champion);
    });

    return result;
  });

  private readonly itemIdToItemMap = computed(() => {
    const itemJson = this.jsonDataService.item.value();
    const result = new Map<string, ItemData>();

    Object.entries(itemJson?.data || {}).forEach((item) => {
      result.set(item[0], item[1]);
    });

    return result;
  });

  readonly allChampionIds = computed(() => {
    const championJson = this.jsonDataService.champion.value();
    if (!championJson) {
      return undefined;
    }

    return Object.values(championJson.data || {}).map((champion) => champion.key);
  });

  championIdToChampion(championId: string): ChampionS | undefined {
    return this.championIdToChampionMap().get(championId);
  }

  itemIdToItem(itemId: string): ItemData | undefined {
    if (this.jsonDataService.item.isLoading()) {
      return undefined;
    }

    const item = this.itemIdToItemMap().get(itemId);
    if (!item) {
      console.warn(`Could not find item: ${itemId}`);
      return undefined;
    }

    return item;
  }
}
