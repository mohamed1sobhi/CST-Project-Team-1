import { getProducts } from './productstore.js';

// Get the seller ID from localStorage
let currentseler = JSON.parse(localStorage.getItem("seller"));

// Function to filter products by seller ID
function getSellerProducts() {
    let allProducts = getProducts();
    return Object.values(allProducts).filter(product => 
        product.seller === currentseler.id
    );
}
document.addEventListener('DOMContentLoaded', appendproduct);

function appendproduct() {
    // Get products from localStorage
    let products = getSellerProducts();
    let tablebody = document.getElementById('body');
    let totalcost = 0;
    let totalprice = 0;
    let totalrevenu = 0;
    let totalstock = 0;
    let totalchecked = 0;

    // Iterate through products array
    Object.values(products).forEach((product) => {
        totalcost += parseInt(product.cost);
        totalprice += parseInt(product.price);
        totalrevenu += parseInt(product.price) - parseInt(product.cost);
        totalstock += parseInt(product.quantity);
        totalchecked += product.active ? 1 : 0;
        const revenu = parseInt(product.price) - parseInt(product.cost);
        
        const productDiv = document.createElement('tr');
        const total = document.getElementById('total');
        tablebody.className = 'table table-striped table-hover';
        
        productDiv.innerHTML = `
            <td>${product.productid}</td>
            <td>${product.name}</td>
            <td>${product.cost}</td>
            <td>${product.price}</td>
            <td>${revenu}</td>
            <td>${product.quantity}</td>
            <td><input type="checkbox" id="toggleSwitch_${product.productid}" ${product.active ? 'checked' : ''}></td>
            <td colspan="2"><button class="btn btn-danger bg-danger ms-3" onclick="removeRow(this)">Remove</button></td>
        `;
        const checkbox = productDiv.querySelector(`#toggleSwitch_${product.productid}`);
        checkbox.addEventListener('change', function() {
            let allProducts = getProducts()
        allProducts.filter(targetProduct => {
            if (targetProduct.productid === product.productid) {
                targetProduct.active = this.checked;
                localStorage.setItem('products', JSON.stringify(allProducts));
            }
        });
        });
        
        tablebody.appendChild(productDiv);

        if (total && total.cells) {
            total.cells[0].innerHTML = `Total`;
            total.cells[1].innerHTML = `number of products: ${Object.keys(products).length}`;
            total.cells[2].innerHTML = `${totalcost}`;
            total.cells[3].innerHTML = `${totalprice}`;
            total.cells[4].innerHTML = `${totalrevenu}`;
            total.cells[5].innerHTML = `${totalstock}`;
            total.cells[6].innerHTML = `${totalchecked}`;
        }
    });
}
