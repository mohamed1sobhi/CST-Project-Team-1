import { Seller } from "./seller.js";

class Products {
  constructor(name, id, price, cost, quantity) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.quantity = quantity;
    this.seller = Seller.name;
  }
}
class Cart {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}
