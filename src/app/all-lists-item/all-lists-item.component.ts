import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeader } from '../list-header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-lists-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header-line">
      <div class="header-star" 
          *ngIf="listHeader.starredList; else notStarred">★
      </div>
      <ng-template #notStarred>
        <div class="header-star">☆
        </div>
      </ng-template>
      <button type="button" 
              [routerLink]="['/one_list', listHeader.id]" 
              class="header-description">{{listHeader.description}} id:{{listHeader.id}}</button>
  </div>
  `,
  styleUrl: './all-lists-item.component.css'
})
export class AllListsItemComponent {
  @Input() listHeader!: ListHeader;
}
