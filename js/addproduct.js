import { Products } from "./stock.js";

class ProductManager {
  static validateInputs(name, price, cost, stock, imagePath) {
    if (!name || !price || !cost || !stock) {
      throw new Error("All fields are required");
    }
    if (isNaN(price) || price <= 0) {
      throw new Error("Price must be a positive number");
    }
    if (isNaN(cost) || cost <= 0) {
      throw new Error("Cost must be a positive number");
    }
    if (isNaN(stock) || stock < 0) {
      throw new Error("Stock must be a non-negative number");
    }
    if (!imagePath) {
      throw new Error("Product image is required");
    }
  }

  static async addProduct(event) {
    event.preventDefault(); // Prevent form submission

    try {
      // Get form elements
      let id = 0;
      const productsitem = JSON.parse(localStorage.getItem("products")) || [];
      if (productsitem.length === 0) {
        id = 0;
      } else {
        id = productsitem[productsitem.length - 1].id + 1;
      }

      const name = document.getElementById("ProductName").value.trim();
      const price = parseFloat(document.getElementById("Price").value);
      const cost = parseFloat(document.getElementById("Cost").value);
      const stock = parseInt(document.getElementById("stock").value);
      const imagePath = document.getElementById("ProductImage").files[0];

      // Validate inputs
      ProductManager.validateInputs(name, price, cost, stock, imagePath);

      // Handle image
      const imagebase64 = await ProductManager.convertToBase64(imagePath);

      // Get current user and existing products
      const user = JSON.parse(sessionStorage.getItem("currentUser"));
      if (!user) {
        throw new Error("User not authenticated");
      }

      let products = JSON.parse(localStorage.getItem("products")) || [];
      console.log(products);
      let currentSellerData =
        JSON.parse(sessionStorage.getItem("currentUser")) || [];
      console.log(currentSellerData);

      // Create and save new product
      const product = new Products(
        id,
        name,
        price,
        cost,
        stock,
        currentSellerData.id,
        imagebase64
      );
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));

      // Clear the form
      document.getElementById("form").reset();
      alert("Product added successfully!");
      window.location.href = "SellerDash.html";
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  static convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  }
}

// Add event listener
const addingButton = document.getElementById("adding");
if (addingButton) {
  addingButton.addEventListener("click", ProductManager.addProduct);
} else {
  console.error("Add product button not found");
}
