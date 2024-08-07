import { Component, inject } from '@angular/core';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { ListHeader } from '../list-header';
import { CommonModule, NgFor } from '@angular/common';
import { AllListsItemComponent } from "../all-lists-item/all-lists-item.component";
import { ListHeadersService } from '../list-headers.service';

@Component({
  selector: 'app-all-lists',
  standalone: true,
  imports: [ListDetailComponent, AllListsItemComponent, NgFor],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search for a list" />
        <button class="button search-list"
                type="button">Search
        </button>
      </form>
    </section>
    <section>
      <app-all-lists-item 
        class="header-list"
        *ngFor="let listHeader of listHeaders" [listHeader]="listHeader">
      </app-all-lists-item>
    </section>
  `,
  styleUrl: './all-lists.component.css'
})

export class AllListsComponent {
  // declare the array of list headers (list descriptions)
  listHeaders: ListHeader[] = [];
  // inject the stuff in this service into the class
  listHeaderService: ListHeadersService = inject(ListHeadersService);
  // on init use the method injected by the service to get the data
  constructor() {
    this.listHeaders = 
      this.listHeaderService.getAllListHeaders();
  }
}
