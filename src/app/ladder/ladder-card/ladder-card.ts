import { Component, input } from '@angular/core';
import { LadderEntry } from '@/ladder/ladder-entry';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { NgIcon } from '@ng-icons/core';
import { SummonerHandle } from '@/summoner-handle/summoner-handle';

@Component({
  imports: [ZardCardImports, NgIcon, SummonerHandle],
  selector: 'app-ladder-card',
  styleUrl: './ladder-card.css',
  templateUrl: './ladder-card.html',
})
export class LadderCard {
  readonly ladderEntry = input.required<LadderEntry>();
}
