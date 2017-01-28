import { Item } from "./items";

export class Product {
  constructor(public id: number,
              public title: string,
              public description: string,
              public price: string,
              public image: string,
              public items: Item[]) {};
}
