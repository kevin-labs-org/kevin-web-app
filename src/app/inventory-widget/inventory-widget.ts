import { Component, computed, inject, input } from '@angular/core';
import { ZardAvatarImports } from '@/shared/components/avatar';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardTooltipDirective } from '@/shared/components/tooltip';
import { ZardSkeletonComponent } from '@/shared/components/skeleton';

@Component({
  imports: [ZardAvatarImports, ZardTooltipDirective, ZardSkeletonComponent],
  selector: 'app-inventory-widget',
  styleUrl: './inventory-widget.css',
  templateUrl: './inventory-widget.html',
})
export class InventoryWidget {
  readonly itemIds = input.required<string[]>();

  private readonly ddragonService = inject(DdragonService);

  protected readonly items = computed(() => {
    return this.itemIds().map((id) => {
      if (id === '') {
        return null;
      } else {
        return this.ddragonService.getItem(id);
      }
    });
  });

  protected readonly valuesReady = computed(
    () => -1 === this.items().findIndex((item) => item === undefined),
  );
}
