import { Component, inject} from '@angular/core';
import { ListDetailItemComponent } from '../list-detail-item/list-detail-item.component';
import { ListItem } from '../list-item';
import { ListItemsService } from '../list-items.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [ListDetailItemComponent, NgFor],
  template: `
    <div class="labels">
      <div class="label completed">completed</div>
      <div class="label description">task description</div>
      <div class="label priority">priority</div>
    </div>
    <app-list-detail-item *ngFor="let item of items"
    [item]="item"></app-list-detail-item>
  `,
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent {
  items: ListItem[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  listItemsService: ListItemsService = inject(ListItemsService);
  constructor() {
    const listId = Number(this.route.snapshot.params['id']);
    this.items = this.listItemsService.getAllListItems(listId);
  }

}
