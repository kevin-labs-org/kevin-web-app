import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-statistic-group',
  styleUrl: './statistic-group.css',
  templateUrl: './statistic-group.html',
})
export class StatisticGroup {
  readonly title = input.required<string>();
}
