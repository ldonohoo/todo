import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-list-detail-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
    <div class="item-completed"
         *ngIf="item.completed; else notCompleted">✅
      </div>
        <ng-template #notCompleted>
          <div class="item-completed">🟩</div>
        </ng-template>
      <div class="item-description">{{item.description}}</div>
      <div class="item-priority">{{item.priority}}</div>

    </div>
  `,
  styleUrl: './list-detail-item.component.css'
})
export class ListDetailItemComponent {
  @Input() item!: ListItem;
}
