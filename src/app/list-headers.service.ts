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
}
