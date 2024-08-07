import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeader } from '../list-header';
import { RouterLink } from '@angular/router';
import { ListHeadersService } from '../list-headers.service';

@Component({
  selector: 'app-all-lists-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header-line">
      <button (click)="listHeaderService.toggleStar(listHeader.id)" 
              class="header-star" 
              *ngIf="listHeader.starredList; else notStarred">★
      </button>
      <ng-template #notStarred>
        <button (click)="listHeaderService.toggleStar(listHeader.id)"
                 class="header-star">☆
        </button>   
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
  listHeaderService: ListHeadersService = inject(ListHeadersService);
}
