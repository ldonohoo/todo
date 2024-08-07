import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-list-detail-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>{{item.description}}</h4>
    <p>{{item.priority}}</p>
    <div *ngIf="item.completed; else notCompleted">✅
    </div>
    <ng-template #notCompleted>🟩
    </ng-template>
  `,
  styleUrl: './list-detail-item.component.css'
})
export class ListDetailItemComponent {
  @Input() item!: ListItem;
}
