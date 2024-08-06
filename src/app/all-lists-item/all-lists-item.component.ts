import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeader } from '../list-header';

@Component({
  selector: 'app-all-lists-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>{{listHeader.description}}</h4>
    <div *ngIf="listHeader.starredList; else notStarred">★
    </div>
    <ng-template #notStarred>
      <div>☆
      </div>
    </ng-template>
  `,
  styleUrl: './all-lists-item.component.css'
})
export class AllListsItemComponent {
  @Input() listHeader!: ListHeader;
}
