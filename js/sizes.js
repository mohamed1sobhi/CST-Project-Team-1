
// let sizes=Array.from(document.getElementsByClassName('sizes'))
// let colors=Array.from(document.getElementsByClassName('colors'))
// let photes=Array.from(document.getElementsByClassName('photes'))
// // Add centering classes to all photos initially
// photes.forEach(photo => {
//     photo.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'mx-auto');
// });
// sizes.forEach(size => {
//     size.addEventListener('click', () => {
//     console.log(size.value);
//     console.log(photes.length);

//     switch(size.value){
//         case 'XS':
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-25', 'h-25');
//             });
//             break;
//         case 'S':
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-25', 'h-25');
//             });
//             break;
//         case 'M':
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-50', 'h-50');
//             });
//             break;
//         case 'L':
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-75', 'h-75');
//             });
//             break;
//         case 'XL':
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-100', 'h-100');
//             });
//             break;
           
        
//         default:
//             photes.forEach(photo => {
//                 photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
//                 photo.classList.add('w-100', 'h-100');
//             });
//     }
//     })}
// )
// colors.forEach(color => {
//     color.addEventListener('click', () => {
//         console.log(color.value);
//         console.log(photes.length);

//         switch(color.value){
//             case 'black':
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                     photo.classList.add('bg-dark');
//                 });
//                 break;
//             case 'white':
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                     photo.classList.add('bg-light');
//                 });
//                 break;
//             case 'red':
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                     photo.classList.add('bg-danger');
//                 });
//                 break;
//             case 'green':
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                     photo.classList.add('bg-success');
//                 });
//                 break;
//             case 'blue':
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                     photo.classList.add('bg-primary');
//                 });
//                 break;
//             default:
//                 photes.forEach(photo => {
//                     photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
//                 });
//                 break;
//         }
//     });
// });

// Add counter functionality to the input fields
$(document).ready(function () {
  $(".btn-minus").click(function () {
    let input = $(this).closest(".input-group").find("input");
    let value = parseInt(input.val());
    if (value > 1) {
      input.val(value - 1);
    }
  });
  $(".btn-plus").click(function () {
    let input = $(this).closest(".input-group").find("input");
    let value = parseInt(input.val());
    input.val(value + 1);
  });
});

// Add rating functionality to the stars
$(document).ready(function () {
  $("#rating i").click(function () {
    var index = $(this).index();
    $(this).siblings().removeClass("fas").addClass("far");
    $(this).prevAll().removeClass("far").addClass("fas");
    $(this).removeClass("far").addClass("fas");
  });
});

// Add review functionality to the form
$("#reviewForm").submit(function (e) {
    e.preventDefault();
    var name = $("#nameval").val();
    var review = $("#review").val();
    var rating = $("#rating i.fas").length;
    if (name == "" || rating === 0 || review =="") {
        //alert("Please fill all required fields.");
        Swal.fire({
          title: "Oops!",
          text: "Please fill all required fields.",
          icon: "warning",
          confirmButtonText: "OK",
        });
    } else {
      Swal.fire({
        title: `Thank you ${name} for review`,
        text: `your rating is ${rating} out of 5.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
});


// Add product to cart functionality
$(document).on("click", "#triggerButton", async function () {
  const productName = $("h3.text-uppercase").text().trim();
  const productPriceText = $("h3.font-weight-semi-bold.mb-4.text-secondary.mt-1").text().trim();
  const productImage = $("#product-carousel .carousel-item.active img").attr("src");
  const productPrice = parseFloat(productPriceText.replace("$", "").trim());
  const confirmAction = await Swal.fire({
    title: "Are you sure?",
    text: `You want to add "${productName}" with price $${productPrice} to the cart?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, add it!",
    cancelButtonText: "No, cancel!",
  });
  // If user confirms the action
  if (confirmAction.isConfirmed) {
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    // Get cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cartItems.findIndex(
      (item) => item.name === product.name
      );
      

    if (existingProductIndex === -1) {
      // If product is not already in the cart, add it
      cartItems.push(product);
        Swal.fire({
          icon: "success",
          title: `"${productName}" added to the cart.`,
          showConfirmButton: false,
          timer: 1000,
        });

    }
    else {
        Swal.fire({
          icon: "info",
          title: `"${productName}" is already in the cart.`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
      
    // Save updated cartItems to localStorage only if product was added
    if (existingProductIndex === -1) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
});


// Add You may AlsoLike products to wishlist functionality
$(document).on("click", ".fa-shopping-cart", async function () {
  const productItem = $(this).closest(".product-item");
  const productName = productItem.find("a.h3.text-decoration-none.text-warning").text().trim();
    const productPriceText = productItem.find("h5").text().trim();
  const productImage = productItem.find(".product-img img").attr("src");
  const productPrice = parseFloat(productPriceText.replace("$", "").trim());

  const confirmAction = await Swal.fire({
    title: "Are you sure?",
    text: `You want to add "${productName}" with price $${productPrice} to the cart?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, add it!",
    cancelButtonText: "No, cancel!",
  });

  if (confirmAction.isConfirmed) {
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );

    if (existingProductIndex > -1) {
      Swal.fire({
        icon: "info",
        title: `"${productName}" is already in the cart.`,
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      cartItems.push(product);
      Swal.fire({
        icon: "success",
        title: `"${productName}" added to the cart.`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});



