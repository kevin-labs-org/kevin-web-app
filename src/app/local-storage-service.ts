import { Service } from '@angular/core';

@Service()
export class LocalStorageService {
  setItem<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const val = window.localStorage.getItem(key);
    if (!val) {
      return null;
    }

    return JSON.parse(val) as T;
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }
}
