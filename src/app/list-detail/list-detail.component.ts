import { Component } from '@angular/core';
import { ListDetailItemComponent } from '../list-detail-item/list-detail-item.component';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [ListDetailItemComponent],
  template: `
    <app-list-detail-item [listItem]="listItem"></app-list-detail-item>
  `,
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent {
  listItem: ListItem = {
    id: 1,
    listId: 0,
    description: 'first task',
    completed: false,
    priority: 1
  }
}
