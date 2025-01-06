export function getProducts() {
    // Get the products from localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    
    // Return the products or handle them as needed
    return products;
  }
  
