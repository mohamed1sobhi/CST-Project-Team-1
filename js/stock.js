class Products {
  static idCounter = 1;  
  constructor(name, price, cost, quantity, seller_id, img) {
    this.productId = Products.idCounter++;  
    this.name = name;
    this.price = price;
    this.cost = cost;
    this.quantity = quantity;
    this.seller = seller_id;
    this.img = img;
    this.active = "true"
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
    this.id = Orders.idCounter++;
    this.customer = customer;
    this.products = products;
    this.total = total;
    this.status = status;
  }
}

export { Products, Cart };
