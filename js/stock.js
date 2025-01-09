class Products {
  constructor(id, name, price, cost, quantity, seller_id, img) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.quantity = quantity;
    this.seller = seller_id;
    this.img = img;
    this.active = "true";
  }
}
class Cart {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
}
class Orders {
  constructor(id, customer, products, total, status) {
    this.id = id;
    this.customer = customer;
    this.products = products;
    this.total = total;
    this.status = status;
  }
}

export { Products, Cart };
