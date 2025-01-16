function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}
const searchInput = document.querySelector('input[type="search"]');
const container = document.getElementById("container");
function renderProducts(filteredProducts) {
    container.innerHTML = " ";
    filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "col-lg-3 col-md-4 col-sm-6 pb-1";
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

function liveSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const allProducts = getProducts();

    const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  renderProducts(
    filteredProducts.length > 0 || searchTerm ? filteredProducts : allProducts
  );
}

searchInput.addEventListener("input", liveSearch);

// renderProducts(getProducts());
