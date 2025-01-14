class Products {
  static id = 1; // Static variable shared across all instances, starts at 1
  constructor(name, price, cost = 100,desc, quantity = 5, seller_id, img, active) {
    this.productid = Products.id++; // Assigns current id then increments it
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.description = desc;
    this.quantity = quantity;
    this.seller = seller_id;
    this.img = img;
    this.active = active;
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

export { Products, Cart, Orders };
