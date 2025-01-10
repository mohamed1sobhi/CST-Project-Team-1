import { getProducts } from './productstore.js';
document.addEventListener('DOMContentLoaded', displayProducts);

function displayProducts() {
  // Get products from localStorage
  let products = getProducts();
  const container = document.getElementById('container');
  
  // Convert products object to array of entries and iterate
  Object.values(products).forEach(product => {
    // Skip inactive products
    if (!product.active) return;

    const productDiv = document.createElement('div');
    productDiv.className = 'col-lg-3 col-md-4 col-sm-6 pb-1';
   
    productDiv.innerHTML = `
      <div class="product-item bg-light mb-4">
      <div class="product-img position-relative overflow-hidden">
        <img class="img-fluid w-100" src="${product.img}" alt="${
      product.productid
    }">
        <div class="product-action text-center mt-2">
        ${
          product.quantity > 0
            ? `<a class="btn btn-outline-dark btn-square"><i class="fa fa-shopping-cart"></i></a>`
            : ""
        }
        <a class="btn btn-outline-dark btn-square" title="Go to product detils"><i class="fas fa-eye" onclick="openProductPage()"></i></a>
        </div>
      </div>
      <div class="text-center py-4">
        <a class="h4 text-decoration-none text-truncate">${product.name}</a>
        <div class="d-flex align-items-center justify-content-center mt-2">
        <h5>${product.price}</h5>
        ${
          product.quantity === 0
            ? '<span class="text-danger ms-2">Out of Stock</span>'
            : ""
        }
        </div>
        <div class="d-flex align-items-center justify-content-center mb-1">
        <small class="fa fa-star text-warning mr-1"></small>
        <small class="fa fa-star text-warning mr-1"></small>
        <small class="fa fa-star text-warning mr-1"></small>
        <small class="fa fa-star-half-alt text-warning mr-1"></small>
        <small class="fa fa-regular fa-star text-warning mr-1"></small>
        </div>
      </div>
      </div>
    `;
    container.appendChild(productDiv);
  });
}
/*
function appendproduct() {
  // Get products from localStorage
  let products = getProducts();
  let table=document.getElementById('result');
    products.forEach(product => {
        const revenu = product.price - product.cost;
        const productDiv = document.createElement('tr');
        productDiv.className = 'col-lg-3 col-md-4 col-sm-6 pb-1';
        
        productDiv.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.cost}</td>
        <td>${revenu}</td>
        <td>${product.stock}</td>
        <td><button class="btn btn-primary ms-3 ">Edit</button></td>
        <td><button class="btn btn-danger ms-3 ">Remove</button></td>
        `;
        
        table.appendChild(productDiv);
    })
}*/
