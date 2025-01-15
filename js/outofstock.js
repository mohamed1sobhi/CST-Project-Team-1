
// Function to update product quantity when item is added to cart
function updateProductQuantity() {
    let products = JSON.parse(localStorage.getItem('products') || '[]');
    let orders = JSON.parse(localStorage.getItem('selledProducts') || '[]');
    let processedOrders = JSON.parse(localStorage.getItem('processedOrders') || '[]');

    // Filter out already processed orders
    let newOrders = orders.filter(order => 
        !processedOrders.some(po => po.id === order.id && po.timestamp === order.timestamp)
    );

    newOrders.forEach(order => {
        let product = products.find(p => String(p.productid) === String(order.id));
        if (product) {
            product.quantity -= order.quantity;
            processedOrders.push(order);
        }
    });

    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('processedOrders', JSON.stringify(processedOrders));
}

// This function should be called when adding items to cart
// Example usage:
// updateProductQuantity({ name: "productName", quantity: quantityAdded });