$(document).ready(function () {
  $("#login-form").validate({
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
      error.appendTo("#formError");
    },
    submitHandler: function (form) {
      alert("Form is valid and ready to be submitted!");
      form.submit();
    },
  });
});
