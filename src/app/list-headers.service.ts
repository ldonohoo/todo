import { Injectable } from '@angular/core';
import { ListHeader } from './list-header';

@Injectable({
  providedIn: 'root'
})
export class ListHeadersService {
  protected listHeaders: ListHeader[] = [
    {
      id: 0,
      description: 'First List',
      starredList: true
    },
    {
      id: 1,
      description: 'Second List',
      starredList: false
    },
    {
      id: 2,
      description: 'Third List',
      starredList: false
    },
    {
      id: 3,
      description: 'Best List',
      starredList: true
    }
  ]

  getAllListHeaders(): ListHeader[] {
    return this.listHeaders;
  }
  getFilteredListHeaders(searchString: String): ListHeader[] {
    return this.listHeaders;
  }
  toggleStar(id: number) {
    this.listHeaders[id].starredList = !this.listHeaders[id].starredList;
  }
  getNextId(): number {
    const ids = this.listHeaders.map(listHeader => listHeader.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
  addList(description: String) {
    console.log('in addlist in list header service, description is:', description)
    if (description.trim()) {
      const nextId = this.getNextId();
      this.listHeaders.push({ id: nextId, description: description, starredList: false});
    }
  }
}
