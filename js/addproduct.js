function addProduct() {
    // Get form elements
    const name = document.getElementById('ProductName').value;
    const price = document.getElementById('Price').value;
    const cost= document.getElementById('Cost').value;
    const stock= document.getElementById('stock').value;
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