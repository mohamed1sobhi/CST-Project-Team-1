$(document).ready(function () {
  let totalAmount = 1; // This will come from the cart value
  let taxAndShippingPercentage = 10; // 10% tax and shipping
  let taxAndShippingAmount = 0;
  let finalAmount = 0;

  // Function to calculate the tax and final total
  function calculateAmounts(cartTotal) {
    totalAmount = parseFloat(cartTotal); // Ensure totalAmount is a number
    taxAndShippingAmount = (taxAndShippingPercentage / 100) * totalAmount;
    finalAmount = totalAmount + taxAndShippingAmount;

    // Update the displayed amounts in the summary section
    $(".summary .summary-item:nth-child(1) span:last-child").text(
      "$" + totalAmount.toFixed(2)
    );
    $(".summary .summary-item:nth-child(2) span:last-child").text(
      "$" + taxAndShippingAmount.toFixed(2)
    );
    $(".summary .total span:last-child").text("$" + finalAmount.toFixed(2));
  }

  // Load cart summary from localStorage
  const cartSummary = JSON.parse(localStorage.getItem("cartSummary"));
  if (cartSummary) {
    $(".summary-item")
      .eq(0)
      .find("span")
      .eq(1)
      .text(`$${cartSummary.subtotal}`);
    $(".summary-item").eq(1).find("span").eq(1).text(`$${cartSummary.tax}`);
    $(".summary-item").eq(2).find("span").eq(1).text(`$${cartSummary.total}`);
    calculateAmounts(cartSummary.total); // Call the function to calculate total amounts
  }

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
      $("#postal-code").val() === "" ||
      $("#country").val() === ""
    ) {
      alert("Not completed required fields");
      valid = false;
    }

    // Check credit card data if selected
    if ($('input[name="payment-method"]:checked').val() === "credit-card") {
      let cardNumber = $("#card-number").val();
      let cardHolderName = $("#cardholder-name").val();
      let expiryDate = $("#expiry-date").val();
      let cvv = $("#cvv").val();

      if (!cardNumber.match(/^\d{16}$/)) {
        alert("Please enter a valid card number.");
        valid = false;
      }
      if (!cardHolderName) {
        alert("Please enter the cardholder's name.");
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
    let postalCode = $("#postal-code").val();
    let country = $("#country").val();

    // Get the delivery location coordinates from the map
    const position = marker.getLatLng();

    // Display order confirmation message
    alert(`
      Order confirmed!
      Total Price: $${finalAmount.toFixed(2)}
      Payment Method: ${
        selectedPaymentMethod === "cash-on-delivery"
          ? "Cash on Delivery"
          : selectedPaymentMethod
      }
      Address: ${addressLine1}, ${city}, ${postalCode}, ${country}
      Thank you for shopping with us!
      We will deliver your order to the provided address.
    `);

    // Save order data to LocalStorage
    localStorage.setItem(
      "orderData",
      JSON.stringify({
        paymentMethod: selectedPaymentMethod,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        postalCode: postalCode,
        country: country,
        lat: position.lat,
        lng: position.lng,
        totalAmount: finalAmount,
      })
    );
  });
});
