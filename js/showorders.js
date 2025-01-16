import { getProducts } from "./productstore.js";

 window.onload = function() {
    try {
        let products = getProducts();
        let orders = JSON.parse(localStorage.getItem('selledProducts') || '[]');
        let matchedProducts = [];
        
        orders.forEach(order => {
            let orderProducts = products.filter(product =>String( product.productid )=== order.id)
            .map(product => ({
            ...product,
            quantity: order.quantity || 1
            }));
            matchedProducts = matchedProducts.concat(orderProducts);
        });
        matchedProducts = matchedProducts.reduce((acc, product) => {
            const existingProduct = acc.find(p => p.productid === product.productid);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
                return acc;
            }
            return [...acc, product];
        }, []);
        localStorage.setItem('matchedProducts', JSON.stringify(matchedProducts));
        
        console.log(matchedProducts);
        
        let currentSeller = JSON.parse(localStorage.getItem("currentUser") || '{}');
        const sellerProducts = matchedProducts.filter(product => product.seller === currentSeller.id);
        


        const orderTableBody = document.getElementById('orderTableBody');
        if (orderTableBody) {
            orderTableBody.innerHTML = `
                <tr>
                    <th style="border: 1px solid black; padding: 8px;">Product Name</th>
                    <th style="border: 1px solid black; padding: 8px;">Price</th>
                    <th style="border: 1px solid black; padding: 8px;">quantity</th>
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
    
       
