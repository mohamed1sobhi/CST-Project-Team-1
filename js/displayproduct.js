import { getProducts } from './productstore.js';
document.addEventListener('DOMContentLoaded', displayProducts);

function displayProducts() {
  // Get products from localStorage
  let products = getProducts();
  const container = document.getElementById('container');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-lg-3 col-md-4 col-sm-6 pb-1';
    
    productDiv.innerHTML = `
      <div class="product-item bg-light mb-4">
        <div class="product-img position-relative overflow-hidden">
          <img class="img-fluid w-100" src="${product.image}" alt="Product Image">
          <div class="product-action text-center mt-2">
            <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-shopping-cart"></i></a>
            <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
            <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
          </div>
        </div>
        <div class="text-center py-4">
          <a class="h6 text-decoration-none text-truncate" href="#">${product.name}</a>
          <div class="d-flex align-items-center justify-content-center mt-2">
            <h5>${product.price}</h5>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-1">
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star-half-alt text-primary mr-1"></small>
            <small class="fa fa-regular fa-star text-primary mr-1"></small>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(productDiv);
  });
}
