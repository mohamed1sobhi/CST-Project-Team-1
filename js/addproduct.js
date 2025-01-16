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
      const name = document.getElementById("ProductName").value.trim();
      const price = parseFloat(document.getElementById("Price").value);
      const cost = parseFloat(document.getElementById("Cost").value);
      const description = document.getElementById("desc").value;
      const stock = parseInt(document.getElementById("stock").value);
      const Active= document.getElementById("Active").checked;
      const imagePath = document.getElementById("ProductImage").files[0];

      // Validate inputs
      ProductManager.validateInputs(name, price, cost, stock, imagePath);

      // Handle image
      const imagebase64 = await ProductManager.convertToBase64(imagePath);

      // Get current user and existing products
     /* const user = JSON.parse(sessionStorage.getItem("currentUser"));
      if (!user) {
        throw new Error("User not authenticated");
      }*/

      let products = JSON.parse(localStorage.getItem("products")) || [];
      let currentseler = JSON.parse(localStorage.getItem("currentUser"));
      // Find the highest product ID and set the static ID counter
      const highestId = products.reduce((max, product) => 
        product.productid > max ? product.productid : max, 0);
      Products.id = highestId + 1;
      // Create and save new product
      const product = new Products(
        name,
        price,
        cost,
        description,  
        stock,
        currentseler.id,
        imagebase64,
        Active
      );
      console.log(product);
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));

      // Clear the form
      document.getElementById("form").reset();
      alert("Product added successfully!");
      window.location.href = "SellerDash.html";
    } catch (error) {
      alert(error.message);
    }
  }

  static convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 800;
          const scale = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
      };
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
