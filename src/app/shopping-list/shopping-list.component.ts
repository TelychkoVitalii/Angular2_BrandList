import { Component, style, state, animate, transition, trigger } from '@angular/core';
import { ShoppingListService } from "./shopping-list.service";
import { Item } from "../items";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
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
