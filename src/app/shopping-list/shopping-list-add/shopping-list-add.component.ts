import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Item } from "../../items";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent {
  isAdd = true;
  @Input() item: Item;
  @Output() cleared = new EventEmitter();

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(item: Item) {
    const newItem = new Item(item.name, item.amount);
    if(!this.isAdd) {
      this.sls.editItem(this.item, newItem);
    } else {
      this.item = newItem;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
