import { Admin, Customer, Seller } from "./registration.js";

$(document).ready(function () {
  $("#login-form").validate({
    debug: true,
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long",
      },
    },
    errorPlacement: function (error, element) {
      $("#formError").html(error);
      element.focus();
    },
    submitHandler: function (form) {
      const email = $("#email").val();
      const password = $("#password").val();

      // Check if match any stored user
      const users = JSON.parse(localStorage.getItem("seller")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user instanceof Admin) {
        alert("Authentication successful!");
        $(".login-form").attr("action", "admin.html");
        form.submit();
      } else if (user instanceof Seller) {
        alert("Authentication successful!");
        $(".login-form").attr("action", "seller.html");
        form.submit();
      } else if (user instanceof Customer) {
        alert("Authentication successful!");
        $(".login-form").attr("action", "customer.html");
        form.submit();
      } else {
        alert("Invalid email or password.");
        $("#formError").text("Invalid email or password.");
      }
      return false; // Prevent the default form submission
    },
  });
});
