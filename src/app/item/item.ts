import { Component, input } from '@angular/core';
import { ItemModel } from '@/ddragon/item-model';
import { ZardButtonComponent } from '@/shared/components/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [ZardButtonComponent, NgOptimizedImage],
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})
export class Item {
  readonly data = input.required<ItemModel>();
}
