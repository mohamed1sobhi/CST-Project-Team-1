export function getProducts() {
    // Get the products from localStorage
    try {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        return products;
    } catch (error) {
        console.error('Error parsing products from localStorage:', error);
        return [];
    }
}
  
