class Products {
  static idCounter = 0;
  constructor(name, price, cost, quantity, seller, img = "") {
    this.id = idCounter++;
    this.name = name;
    this.cost = cost;
    this.price = price;
    this.quantity = quantity;
    this.seller = seller;
    this.img = img;
    this.active = true;
  }
}
class Cart {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}
class Orders {
  static idCounter = 0;
  constructor(customer, products, total, status) {
    this.id = idCounter++;
    this.customer = customer;
    this.products = products;
    this.total = total;
    this.status = status;
  }
}

export { Products, Cart };
