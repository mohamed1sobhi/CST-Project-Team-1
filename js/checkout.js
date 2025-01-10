$(document).ready(function () {
  // Load cart summary from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price,0);
  const tax = totalPrice * 0.1;
  const subtotal = totalPrice + tax;
  $(".summary-item").eq(0).find("span").eq(1).text(`$${totalPrice}`);
  $(".summary-item").eq(1).find("span").eq(1).text(`$${tax}`);
  $(".summary-item").eq(2).find("span").eq(1).text(`$${subtotal}`);
  

  // Show message if all fields are not filled
  function checkDataCompleteness() {
    let valid = true;
    if (!$('input[name="payment-method"]:checked').length) {
      alert("Please Enter All Payment Details");
      valid = false;
    }

    if (
      $("#address-line1").val() === "" ||
      $("#city").val() === "" ||
      $("#country").val() === ""
    ) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please complete all required fields before proceeding.",
        icon: "warning",
        confirmButtonText: "OK",
      });

      valid = false;
    }

    // Check credit card data if selected
    if ($('input[name="payment-method"]:checked').val() === "credit-card") {
      let cardNumber = $("#card-number").val();
      let cardHolderName = $("#cardholder-name").val();
      let expiryDate = $("#expiry-date").val();
      let cvv = $("#cvv").val();

      if (!cardNumber.match(/^\d{16}$/)) {
        valid = false;
      }
      if (!cardHolderName) {
        valid = false;
      }
      if (!expiryDate.match(/^\d{2}\/\d{2}$/)) {
        alert("Please enter a valid expiry date (MM/YY).");
        valid = false;
      }
      if (!cvv.match(/^\d{3}$/)) {
        alert("Please enter a valid CVV.");
        valid = false;
      }
    }

    return valid;
  }

  // Handling the checkout button click
  $(".proceed-btn").on("click", function () {
    if (!checkDataCompleteness()) {
      return;
    }

    // Get the selected payment method
    let selectedPaymentMethod = $('input[name="payment-method"]:checked').val();

    // Get the delivery address details
    let addressLine1 = $("#address-line1").val();
    let addressLine2 = $("#address-line2").val();
    let city = $("#city").val();
    let country = $("#country").val();

    // Get the delivery location coordinates from the map
    const position = marker.getLatLng();
    Swal.fire({
      title: "Order Confirmed!",
      html: `
    <p><strong>Total Price:</strong> $${totalPrice}</p>
    <p><strong>Payment Method:</strong> ${
      selectedPaymentMethod === "cash-on-delivery"
        ? "Cash on Delivery"
        : selectedPaymentMethod
    }</p>
    <p><strong>Address:</strong> ${addressLine1}, ${city}, ${country}</p>
    <p>Thank you for shopping with us!<br>We will deliver your order to the provided address.</p>`,
      icon: "success",
      confirmButtonText: "OK",
    });

    // send order data to the seller
    let cartSummary = JSON.parse(localStorage.getItem("cartSummary"));
    const ordersForSeller = JSON.parse(localStorage.getItem("ordersForSeller")) || [];    
    let orderdataforSeller = {
      orderId: ordersForSeller.length + 1,
      city: city,
      country: country,
      lat: position.lat, //map returns the lat and lng of the marker
      lng: position.lng,
      orderAddressLine1: addressLine1,
      orderAddressLine2: addressLine2,
      paymentMethod: selectedPaymentMethod,
      productsNames: cartSummary.productNames,
      productsQuantity: cartSummary.productQuantity,
      productsIds: cartSummary.productIds,
    };
    ordersForSeller.push(orderdataforSeller);
    localStorage.setItem("ordersForSeller", JSON.stringify(ordersForSeller));
  });
});
