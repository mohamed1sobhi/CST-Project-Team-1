import { getProducts } from "./productstore.js";
 window.onload = function() {
    try {
        let products = getProducts();
        let orders = JSON.parse(localStorage.getItem('ordersForSeller') || '[]');
        let matchedProducts = [];
        
        orders.forEach(order => {
            let orderProducts = order.productsIds.map((id, index) => {
                const product = products.find(product => String(product.productid) === id);
                if (product) {
                    return {
                        ...product,
                        quantity: order.productsQuantity[index]
                    };
                }
                return null;
            }).filter(Boolean);
            matchedProducts = matchedProducts.concat(orderProducts);
        });
        console.log(matchedProducts);
        
        let currentSeller = JSON.parse(localStorage.getItem("seller") || '{}');
        const sellerProducts = matchedProducts.filter(product => product.seller === currentSeller.id);
        


        const orderTableBody = document.getElementById('orderTableBody');
        if (orderTableBody) {
            orderTableBody.innerHTML = `
                <tr>
                    <th style="border: 1px solid black; padding: 8px;">Product Name</th>
                    <th style="border: 1px solid black; padding: 8px;">Price</th>
                    <th style="border: 1px solid black; padding: 8px;">Stocks</th>
                </tr>
                ${sellerProducts.map(product => `
                <tr>
                    <td style="border: 1px solid black; padding: 8px;">${product.name}</td>
                    <td style="border: 1px solid black; padding: 8px;">$${product.price}</td>
                    <td style="border: 1px solid black; padding: 8px;">${product.quantity}</td>
                </tr>
                `).join('')}
            `;
        } else {
            console.error('Table body with id "orderTableBody" not found');
        }
        } catch (error) {
            console.error('Error loading orders:', error);
            document.body.innerHTML = '<p>Error loading orders. Please try again later.</p>';
        }
    };
    
       
