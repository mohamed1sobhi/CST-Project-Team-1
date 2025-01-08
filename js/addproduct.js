import { Products } from "./stock.js";
import { Seller } from "./registration.js";

let adding= document.getElementById("adding");
adding.addEventListener("click", addProduct);
function addProduct() {
  // Get form elements
  const name = document.getElementById("ProductName").value;
  const price = document.getElementById("Price").value;
  const cost = document.getElementById("Cost").value;
  const stock = document.getElementById("stock").value;
  const imagePath = document.getElementById("ProductImage").files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const imagebase64 = reader.result;

    // Get existing products and determine next ID
    let products = JSON.parse(localStorage.getItem("products")) || {};
    const nextId =
      Object.keys(products).length === 0
        ? 1
        : Math.max(...Object.keys(products).map(Number)) + 1;

    // Create a product object using the Products class
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const seller = new Seller(user.name, user.email, user.password);
    const product = new Products(
      nextId,
      name,
      cost,
      price,
      stock,
      seller.id,
      imagebase64
    );

    // Store the product with its ID
    products[nextId] = product;
    localStorage.setItem("products", JSON.stringify(products));

    // Clear the form
    document.getElementById("productForm").reset();
  };

  if (imagePath) {
    reader.readAsDataURL(imagePath);
  }
}
