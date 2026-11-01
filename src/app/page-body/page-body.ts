import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-page-body',
  styleUrl: './page-body.css',
  templateUrl: './page-body.html',
})
export class PageBody {
}
