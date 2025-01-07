import { getProducts } from './productstore.js';
document.addEventListener('DOMContentLoaded', appendproduct);

function appendproduct() {
    // Get products from localStorage
    let products = getProducts();
    let tablebody = document.getElementById('body');
    let totalcost = 0;
    let totalprice = 0;
    let totalrevenu = 0;
    let totalstock = 0;
    let totalchecked = 0;

    // Convert products object to array of entries and iterate
    Object.entries(products).forEach(([id, product]) => {
        totalcost += parseInt(product.cost);
        totalprice += parseInt(product.price);
        totalrevenu += product.price - product.cost;
        totalstock += parseInt(product.stock);
        totalchecked += parseInt(product.checked);
        const revenu = product.price - product.cost;
        
        const productDiv = document.createElement('tr');
        const total = document.getElementById('total');
        tablebody.className = 'table table-striped table-hover';
        
        productDiv.innerHTML = `
            <td>${id}</td>
            <td>${product.name}</td>
            <td>${product.cost}</td>
            <td>${product.price}</td>
            <td>${revenu}</td>
            <td>${product.stock}</td>
            <td><input type="checkbox" id="toggleSwitch" ${product.checked ? 'checked' : ''}></td>
            <td><button class="btn btn-danger bg-danger ms-3" onclick="removeRow(this)">Remove</button></td>
        `;
        
        tablebody.appendChild(productDiv);

        total.cells[0].innerHTML = `Total`;
        total.cells[1].innerHTML = `number of products: ${Object.keys(products).length}`;
        total.cells[2].innerHTML = `${totalcost}`;
        total.cells[3].innerHTML = `${totalprice}`;
        total.cells[4].innerHTML = `${totalrevenu}`;
        total.cells[5].innerHTML = `${totalstock}`;
        total.cells[6].innerHTML = `${totalchecked}`;
    });
}
