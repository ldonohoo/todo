import { Component, inject } from '@angular/core';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { ListHeader } from '../list-header';
import { CommonModule, NgFor } from '@angular/common';
import { AllListsItemComponent } from "../all-lists-item/all-lists-item.component";
import { ListHeadersService } from '../list-headers.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-lists',
  standalone: true,
  imports: [ListDetailComponent, AllListsItemComponent, NgFor, ReactiveFormsModule],
  template: `
    <section>
      <form>
        <!-- #filter is a template reference variable -->
        <input type="text"
               placeholder="Search for a list" 
               #search/>
        <button class="button search-list"
                type="button"
                (click)="searchLists(search.value)"
                >Search
        </button>
      </form>
    </section>
    <form [formGroup]="newListForm" 
          (submit)="addNewList()"
          class="add-list">
      <label for="description">Description</label>
      <input id="description"
             formControlName="description"
             type="text" 
             placeholder="Enter new list name" />
      <button type="submit">Add
      </button>
    </form>
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
  newListForm = new FormGroup({
    description: new FormControl('')
  })

  constructor() {
    this.listHeaders = 
      this.listHeaderService.getAllListHeaders();
  }

  addNewList() {
    console.log('description is:', this.newListForm.value.description);
    this.listHeaderService.addList(
      this.newListForm.value.description ?? ''
    )
    this.newListForm.reset();
  }
  searchLists(searchString: String) {
    if (!searchString) {
      console.log('search empty, reload list')
      this.listHeaders = this.listHeaderService.getAllListHeaders();
      return;
    } else {
      this.listHeaders = this.listHeaders.filter((listHeader) => 
        listHeader?.description.toLowerCase().includes(searchString.toLowerCase()))
    }

  }
}
