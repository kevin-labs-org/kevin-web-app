import { Component, computed, inject } from '@angular/core';
import {
  ZardChartConfig,
  ZardChartDatum,
  ZardChartImports,
  ZardChartSeries,
} from '@/shared/components/chart';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { RankHistoryStore } from '@/profile/rank-history-store';
import { RankHistory } from '@/profile/rank-history';
import { NgOptimizedImage } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  imports: [ZardCardImports, ZardChartImports, NgOptimizedImage, NgIcon],
  selector: 'app-rank-graph-card',
  styleUrl: './rank-graph-card.css',
  templateUrl: './rank-graph-card.html',
})
export class RankGraphCard {
  private readonly rankHistoryStore = inject(RankHistoryStore);

  protected readonly chartConfig: ZardChartConfig = {
    desktop: { label: 'Rank', color: 'var(--chart-1)' },
  };

  protected readonly chartData = computed(() => {
    const data = this.rankHistoryStore.rankHistory.value();
    if (!data) {
      return undefined;
    }

    return data.map(this.mapToChartData);
  });

  protected readonly series: ZardChartSeries[] = [{ dataKey: 'rank', smooth: true }];

  private mapToChartData(rank: RankHistory): ZardChartDatum {
    return {
      date: rank.date.toDateString(),
      rank: 1,
    };
  }
}
