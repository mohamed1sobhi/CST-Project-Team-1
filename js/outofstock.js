// Function to update product quantity when item is added to cart
function updateProductQuantity(cartItem) {
    console.log(cartItem);
    console.log(cartItem.name);
    let products = JSON.parse(localStorage.getItem("products")) || [];
    
    const product = products.find(p => p.name === cartItem.name);
    if (product) {
        product.quantity -= cartItem.quantity;
        localStorage.setItem("products", JSON.stringify(products));
    }
}

// This function should be called when adding items to cart
// Example usage:
// updateProductQuantity({ name: "productName", quantity: quantityAdded });