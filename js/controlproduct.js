import { getProducts } from "./productstore";
document.addEventListener('DOMContentLoaded', controlproduct);

function controlproduct() {
    let products = getProducts();
    
    // Get existing hidden products from localStorage
    const hiddenProducts = JSON.parse(localStorage.getItem('hiddenProducts') || '[]');
    
    // Filter active and inactive products
    const activeProducts = products.filter(product => product.active === "true");
    const inactiveProducts = products.filter(product => product.active === "false");
    
    // Update hidden products list
    localStorage.setItem('hiddenProducts', JSON.stringify(inactiveProducts));
    localStorage.setItem('products', JSON.stringify(activeProducts));

    // Hide inactive products in the UI
    inactiveProducts.forEach(product => {
        const productElement = document.getElementById(product.productid);
        if (productElement) {
            productElement.style.display = 'none';
        }
    });

    // Show active products in the UI
    activeProducts.forEach(product => {
        const productElement = document.getElementById(product.productid);
        if (productElement) {
            productElement.style.display = 'block';
        }
    });
}