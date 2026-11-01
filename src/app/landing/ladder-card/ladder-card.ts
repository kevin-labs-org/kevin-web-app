import { Component, input } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { SummonerHandle } from '@/summoner-handle/summoner-handle';
import { Profile } from '@/landing/profile';

@Component({
  imports: [ZardCardImports, SummonerHandle],
  selector: 'app-ladder-card',
  styleUrl: './ladder-card.css',
  templateUrl: './ladder-card.html',
})
export class LadderCard {
  readonly profile = input.required<Profile>();
}
