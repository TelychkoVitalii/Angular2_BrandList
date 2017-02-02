import { Component, Input, style, state, animate, transition, trigger } from '@angular/core';
import { Product } from "../../../product";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
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
        animate(500)
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
export class ProductItemComponent {
  @Input() product: Product; // defined interaction with Product interface via @Input() which have a name 'product'
  @Input() productId: number; // defined access to productId via @Input()
}
