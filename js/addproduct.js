function addProduct() {
    // Get form elements
    const name = document.getElementById('ProductName').value;
    const price = document.getElementById('Price').value;
    const imagePath = document.getElementById('ProductImage').files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const imagebase64 = reader.result;
    
    // Create a product object
    const product = {
      name,
      price,
      image: imagebase64,
    };
    
    // Store the product in localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    
    // Clear the form
    document.getElementById('productForm').reset();
}
if(imagePath){
    reader.readAsDataURL(imagePath);
  }
}