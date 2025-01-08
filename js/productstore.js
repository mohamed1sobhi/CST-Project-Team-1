export function getProducts() {
    // Get the products from localStorage
    try {
        if (!localStorage) {
            console.error('localStorage is not available');
            return [];
        }
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    } catch (error) {
        console.error('Error parsing products from localStorage:', error);
        return [];
    }
}
  
