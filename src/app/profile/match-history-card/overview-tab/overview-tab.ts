import { Component } from '@angular/core';
import {
  ZardCardComponent,
  ZardCardContentComponent,
  ZardCardHeaderComponent,
  ZardCardTitleComponent,
} from '@/shared/components/card';
import { InventoryWidget } from '@/inventory-widget/inventory-widget';
import { StatisticGroup } from '@/profile/match-history-card/statistic-group/statistic-group';

@Component({
  imports: [
    ZardCardComponent,
    ZardCardContentComponent,
    InventoryWidget,
    StatisticGroup,
    ZardCardHeaderComponent,
    ZardCardTitleComponent,
  ],
  selector: 'app-overview-tab',
  styleUrl: './overview-tab.css',
  templateUrl: './overview-tab.html',
})
export class OverviewTab {}
