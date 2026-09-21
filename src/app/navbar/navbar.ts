import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDialogRef, ZardDialogService } from '@/shared/components/dialog';
import {
  ZardCommandComponent,
  ZardCommandInputComponent,
  ZardCommandListComponent,
  ZardCommandOption,
  ZardCommandOptionComponent,
  ZardCommandOptionGroupComponent,
} from '@/shared/components/command';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowUp,
  lucideEclipse,
  lucideMoon,
  lucideSearch,
  lucideSun,
} from '@ng-icons/lucide';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ZardSkeletonComponent } from '@/shared/components/skeleton';
import { ZardDarkMode, EDarkModes } from '@/shared/services';
import { ZardDropdownImports } from '@/shared/components/dropdown';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    ZardButtonComponent,
    ZardCommandComponent,
    ZardCommandInputComponent,
    ZardCommandListComponent,
    ZardCommandOptionComponent,
    ZardCommandOptionGroupComponent,
    NgIcon,
    ZardSkeletonComponent,
    ZardDropdownImports,
  ],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar.css',
  viewProviders: [provideIcons({ lucideSearch, lucideSun, lucideMoon, lucideEclipse })],
})
export class Navbar {
  protected readonly EDarkModes = EDarkModes;
  protected readonly darkMode = inject(ZardDarkMode);

  private readonly dialogService = inject(ZardDialogService);
  private readonly router = inject(Router);

  private readonly cmdPanel = viewChild.required<TemplateRef<any>>('what');

  protected searchQuery = signal('');

  private readonly dialogRef = signal<ZardDialogRef | null>(null);

  protected searchResultsResource = rxResource({
    params: () => ({ query: this.searchQuery() }),
    stream: ({ params }) => this.searchProfile(params.query),
  });

  protected open() {
    const dialog = this.dialogService.create({
      zContent: this.cmdPanel(),
      zClosable: false,
      zHideFooter: true,
      zOkText: null,
      zCancelText: null,
      zMaskClosable: true,
      zWidth: '24rem',
      zCustomClasses: '!p-0 !gap-0 !border-0 !bg-transparent !shadow-none',
    });

    this.dialogRef.set(dialog);
  }

  protected navigateToProfile($event: ZardCommandOption): void {
    this.router
      .navigate(['/profile', 'NA1', 'NA1', $event.label])
      .finally(() => this.dialogRef()?.close());
  }

  private searchProfile(query: string): Observable<string[]> {
    return of([`Summoner-${query}-1`, `Summoner-${query}-2`, `Summoner-${query}-3`]).pipe(
      delay(1000),
    );
  }
}
