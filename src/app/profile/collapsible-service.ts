import { Injectable, signal } from '@angular/core';

@Injectable()
export class CollapsibleService {
  private readonly activeKey = signal('');

  setActiveKey(activeKey: string): void {
    if (activeKey === this.activeKey()) {
      this.activeKey.set('');
      return;
    }

    this.activeKey.set(activeKey);
  }

  shouldShow(activeKey: string): boolean {
    return this.activeKey() === activeKey;
  }
}
