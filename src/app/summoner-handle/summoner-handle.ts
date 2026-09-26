import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-summoner-handle',
  styleUrl: './summoner-handle.css',
  templateUrl: './summoner-handle.html',
})
export class SummonerHandle {
  readonly name = input.required<string>();
  readonly tag = input.required<string>();
}
