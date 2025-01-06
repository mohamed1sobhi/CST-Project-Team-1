import { getProducts } from './productstore.js';
document.addEventListener('DOMContentLoaded', appendproduct);

function appendproduct() {
  // Get products from localStorage
  let products = getProducts();
  let table=document.getElementById('result');
    products.forEach(product => {
        const revenu = product.price - product.cost;
        const id=products.indexOf(product)+1;
        const productDiv = document.createElement('tr');
        productDiv.className = 'table-row';
        
        productDiv.innerHTML = `
        <td>${id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.cost}</td>
        <td>${revenu}</td>
        <td>${product.stock}</td>
        <td>
            <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch"  id="toggleSwitch">
            </div>
        </td>
        <td><button class="btn btn-danger bg-danger ms-3 ">Remove</button></td>
        `;
        
        table.appendChild(productDiv);
    });
}