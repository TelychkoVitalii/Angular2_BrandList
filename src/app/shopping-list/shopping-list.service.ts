import { Injectable } from '@angular/core';
import { Item } from "../items";

@Injectable()
export class ShoppingListService {
  private items: Item[] = [];


  getItems() {
    return this.items;
  }

  addItems(items: any) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  editItem(oldItem: Item, newItem: Item) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
