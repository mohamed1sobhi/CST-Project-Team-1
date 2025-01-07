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
    
    // Get existing products or initialize empty object
    let products = JSON.parse(localStorage.getItem('products')) || {};
    
    // Get the highest existing ID and increment by 1, or start at 1 if no products exist
    const productId = Object.keys(products).length > 0 
      ? Math.max(...Object.keys(products).map(Number)) + 1 
      : 1;
    // Store the product with ID as key
    products[productId] = product;
    localStorage.setItem('products', JSON.stringify(products));
    
    // Clear the form
    document.getElementById('productForm').reset();
  }

  if(imagePath) {
    reader.readAsDataURL(imagePath);
  }
}