import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDialogService } from '@/shared/components/dialog';
import { SearchCommand } from '@/search-command/search-command';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ZardButtonComponent],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly dialogService = inject(ZardDialogService);

  protected open() {
    this.dialogService.create({
      zContent: SearchCommand,
      zClosable: false,
      zHideFooter: true,
      zOkText: null,
      zCancelText: null,
      zMaskClosable: true,
      zWidth: '24rem',
      zCustomClasses: '!p-0 !gap-0 !border-0 !bg-transparent !shadow-none',
    });
  }
}
