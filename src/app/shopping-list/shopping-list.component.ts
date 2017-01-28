import { Component } from '@angular/core';
import { ShoppingListService } from "./shopping-list.service";
import { Item } from "../items";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  items: Item[] = [];
  selectedItem: Item = null;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

  onSelectItem(item: Item) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
