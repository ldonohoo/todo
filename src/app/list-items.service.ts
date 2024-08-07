import { Injectable } from '@angular/core';
import { ListItem } from './list-item';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  protected listItems: ListItem[] = [
    {
      id: 0,
      listId: 0,
      description: 'Debug the app',
      priority: 1,
      completed: true
    },
    {
      id: 0,
      listId: 0,
      description: 'Chop apples for salad',
      priority: 3,
      completed: false
    },
    {
      id: 0,
      listId: 0,
      description: 'Tune up bike',
      priority: 2,
      completed: false
    }
  ]
  getAllListItems(listId: number): ListItem[] {
    return this.listItems.filter((listItem) => 
      listItem.listId == listId 
    );
  }
}
