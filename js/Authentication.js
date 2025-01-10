$(document).ready(function () {
  $("#login-form").validate({
    debug: false,
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      checkbox: {
        required: true,
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
      checkbox: {
        required: "You must agree to the Terms of Service",
      },
    },
    errorPlacement: function (error, element) {
      $("#formError").html(error);
    },
    submitHandler: function (form) {
      const email = $("#email").val();
      const password = $("#password").val();

      // Check if match any stored user
      // Get all users from localStorage
      let sellers = [],
        admins = [],
        customers = [];
      try {
        sellers = JSON.parse(localStorage.getItem("seller")) || [];
        admins = JSON.parse(localStorage.getItem("admin")) || [];
        customers = JSON.parse(localStorage.getItem("customer")) || [];
      } catch (e) {
        console.error("Error parsing localStorage:", e);
      }

      const users = [...sellers, ...admins, ...customers];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Store user info in session (optional)
        localStorage.removeItem("currentUser");
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            id: user.id,
            email: user.email,
            type: user.type,
            name: user.name,
            status: "logged in",
          })
        );
        // Redirect using window.location instead of form submission
        if (user.type === "admin") {
          window.location.href = "AdminDash.html";
        } else if (user.type === "seller") {
          window.location.href = "SellerDash.html";
        } else if (user.type === "customer") {
          window.location.href = "HomePage.html";
        }
      } else {
        $("#formError").text("Invalid email or password.");
      }
      return false; // Prevent the default form submission
    },
  });
});
