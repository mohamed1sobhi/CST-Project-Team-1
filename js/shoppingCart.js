// Load the cart data from localStorage and display it in the table
function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartTableBody = $(".cart-table tbody");
  cartTableBody.empty();
  // Loop through each product in the cart and display it
  cartItems.forEach((item) => {
    const productRow = `
      <tr data-name="${item.name}">
        <td>${item.name}</td>
        <td><input type="number" class="form-control quantity" value="${item.quantity || 1}" min="1" data-price="${item.price}"></td>
        <td class="product-price">${item.price}</td>
        <td class="product-total">${item.price}</td>
        <td><button class="btn btn-danger btn-sm remove-product">Remove</button></td>
      </tr>`;
    cartTableBody.append(productRow);
  });
  updateTotalPrice(); // Update the total price initially
}

// Update product quantity and recalculate the total price
$(document).on("change", ".quantity", function () {
  const quantity = parseInt($(this).val());
  const price = parseFloat($(this).data("price"));
  // Check for valid quantity
  if (isNaN(quantity) || quantity <= 0) {
    $(this).val(1); // Set to default value =1 if invalid
  }
  const total = quantity * price;
  $(this).closest("tr").find(".product-total").text(total.toFixed(2));
  updateTotalPrice();

  // Update product quantity in localStorage when changed
  const productName = $(this).closest("tr").data("name");
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.forEach((item) => {
    if (item.name === productName) {
      item.quantity = quantity; // Update the quantity
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});


// Remove product from cart
$(document).on("click", ".remove-product", function () {
  const productName = $(this).closest("tr").data("name");

  // Remove product from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems = cartItems.filter((item) => item.name !== productName);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  $(this).closest("tr").remove(); // Remove the row from the table
  updateTotalPrice();
});

// Update the total price of the cart
function updateTotalPrice() {
  let totalPrice = 0;
  $(".product-total").each(function () {
    const total = parseFloat($(this).text());
    if (!isNaN(total)) {
      totalPrice += total;
    }
  });

  // Calculate tax (10%)
  const tax = totalPrice * 0.1;
  const subtotal = totalPrice;
  const grandTotal = subtotal + tax;

  // Update the summary
  $(".cart-summary .d-flex .total")
    .eq(0)
    .text(`$${subtotal.toFixed(2)}`);
  $(".cart-summary .d-flex .total")
    .eq(1)
    .text(`$${tax.toFixed(2)}`);
  $(".cart-summary .d-flex .total")
    .eq(2)
    .text(`$${grandTotal.toFixed(2)}`);
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const productIds = cartItems.map((item) => item.id);
  const productNames = cartItems.map((item) => item.name);
  const productQuantitynum = cartItems.map((item) => item.quantity);
  console.log(productQuantitynum);
  localStorage.setItem(
    "cartSummary",
    JSON.stringify({
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: grandTotal.toFixed(2),
      productIds: productIds,
      productNames: productNames,
      productQuantity: productQuantitynum,
    })
  );
}

// Proceed to checkout
$(document).on("click", "#GoTOCheckout", function () {
  Swal.fire({
    title: "Proceed to Checkout?",
    text: "Are you sure you want to proceed to the checkout page to complete your order?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, proceed",
    cancelButtonText: "No, stay here",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "checkout.html";
    }
  });
});

// Call loadCart on page load
$(document).ready(function () {
  loadCart();
});
