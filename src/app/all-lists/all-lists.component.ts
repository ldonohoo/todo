import { Component } from '@angular/core';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { ListHeader } from '../list-header';
import { AllListsItemComponent } from "../all-lists-item/all-lists-item.component";

@Component({
  selector: 'app-all-lists',
  standalone: true,
  imports: [ListDetailComponent, AllListsItemComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search for a list" />
        <button class="button search-list" type="button">Search
        </button>
      </form>
    </section>
    <section>
      <app-all-lists-item [listHeader]="listHeader"></app-all-lists-item>
    </section>

  
  `,
  styleUrl: './all-lists.component.css'
})
export class AllListsComponent {
  listHeader: ListHeader = {
    id: 1,
    description: 'First List',
    starredList: true
  }
}
