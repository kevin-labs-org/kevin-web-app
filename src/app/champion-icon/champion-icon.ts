import { Component, computed, inject, input } from '@angular/core';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { ZardSkeletonComponent } from '@/shared/components/skeleton';

@Component({
  imports: [ZardAvatarImports, ZardSkeletonComponent],
  selector: 'app-champion-icon',
  styleUrl: './champion-icon.css',
  templateUrl: './champion-icon.html',
})
export class ChampionIcon {
  readonly championId = input.required<string>();

  private readonly ddragonService = inject(DdragonService);

  readonly championImageUrl = computed(() =>
    this.ddragonService.getChampionSquare(this.championId()),
  );
}
