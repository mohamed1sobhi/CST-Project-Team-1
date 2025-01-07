function addProduct() {
  // Get form elements
  const name = document.getElementById('ProductName').value;
  const price = document.getElementById('Price').value;
  const cost = document.getElementById('Cost').value;
  const stock = document.getElementById('stock').value;
  const cheched = document.getElementById('Active').checked;
  const imagePath = document.getElementById('ProductImage').files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const imagebase64 = reader.result;
    
    // Create a product object
    const product = {
      name,
      cost,
      price,
      stock,
      cheched,
      image: imagebase64,
    };
    
    // Get existing products and determine next ID
    let products = JSON.parse(localStorage.getItem('products')) || {};
    const nextId = Object.keys(products).length === 0 
      ? 1 
      : Math.max(...Object.keys(products).map(Number)) + 1;
    
    // Store the product with its ID
    products[nextId] = product;
    localStorage.setItem('products', JSON.stringify(products));
    
    // Clear the form
    document.getElementById('productForm').reset();
  }

  if(imagePath) {
    reader.readAsDataURL(imagePath);
  }
}