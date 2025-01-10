// import {customerDB,sellerDB,adminDB,productsDB} from './dbschema.js';
class Customer {
  constructor(id, name, email, password, cart = [], likedProducts = []) {
    this.id = id;
    this.type = "customer";
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this.likedProducts = likedProducts;
  }
}

class Seller {
  constructor(id, name, email, password) {
    this.id = id;
    this.type = "seller";
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Admin {
  constructor(id, name, email, password) {
    this.id = id;
    this.type = "admin";
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export class Contact{
  constructor(id, name, email,message){
    this.id = id;
    this.name = name;
    this.email = email;
    this.message=message;
  }
}

// async function addUser(account, newUser) {
//   try {
//       if (account === "customer") {
//           await customerDB.customers.add(newUser);
//       } else if (account === "seller") {
//           await sellerDB.sellers.add(newUser);
//       } else if (account === "admin") {
//           await adminDB.admins.add(newUser);
//       }
//       console.log("User added successfully!");
//   } catch (error) {
//       console.error("Failed to add user:", error);
//   }
// }
// async function getUsers(account) {
//   let users = [];
//   try {
//       if (account === "customer") {
//           users = await customerDB.customers.toArray();
//       } else if (account === "seller") {
//           users = await sellerDB.sellers.toArray();
//       } else if (account === "admin") {
//           users = await adminDB.admins.toArray();
//       }
//       return users;
//   } catch (error) {
//       console.error("Failed to fetch users:", error);
//   }
// }
$(function () {
  $.fn.extend({
    singup: function (account) {
      let pass = $(this).isPassValid($("input:eq(2)").val());
      let confpass = $(this).isconfpassValid($("input:eq(3)").val());
      let email = $(this).isEmailValid($("input:eq(1)").val());
      let Name = $(this).isNameValid($("input:eq(0)").val());

      $("input").on("input", function () {
        $(this).parent().find("p").hide();
      });

      if (
        Name === true &&
        email === true &&
        pass === true &&
        confpass === true
      ) {
        let user = JSON.parse(localStorage.getItem(account)) || [];
        // let user=getUsers(account)||[];

        // Check for existing name and email
        let alluser =
          JSON.parse(localStorage.getItem("customer")) ||
          [].concat(JSON.parse(localStorage.getItem("seller")) || []);
        let nameExist = alluser.some((e) => e.name === $("input:eq(0)").val());
        let emailExist = alluser.some(
          (e) => e.email === $("input:eq(1)").val()
        );

        if (emailExist) {
          $("#p4").show();
          $("input:eq(1)").focus();
        } else {
          $("#p4").hide();
        }
        if (nameExist) {
          $("#p2").show();
          $("input:eq(0)").focus();
        } else {
          $("#p2").hide();
        }

        if (
          !nameExist &&
          !emailExist &&
          $(":checkbox").prop("checked") == true
        ) {
          let obj;
          if (account == "customer") {
            let id = 0;
            const productsitem =
              JSON.parse(localStorage.getItem("customer")) || [];
            if (productsitem.length === 0) {
              id = 0;
            } else {
              id = productsitem[productsitem.length - 1].id + 1;
            }
            obj = new Customer(
              id,
              $("input:eq(0)").val(),
              $("input:eq(1)").val(),
              $("input:eq(2)").val()
            );
            // localStorage.setItem("CustomerIdCounter", Customer.idCounter);
            window.location.href = "HomePage.html";
            console.log(obj);
          } else {
            let id = 0;
            const productsitem =
              JSON.parse(localStorage.getItem("seller")) || [];
            if (productsitem.length === 0) {
              id = 0;
            } else {
              id = productsitem[productsitem.length - 1].id + 1;
            }
            obj = new Seller(
              id,
              $("input:eq(0)").val(),
              $("input:eq(1)").val(),
              $("input:eq(2)").val()
            );
            // localStorage.setItem("SellerIdCounter", Seller.idCounter);
            window.location.href = "SellerDash.html";
            console.log(obj);
          }
          // addUser(user,obj);
          user.push(obj);
          localStorage.setItem(account, JSON.stringify(user));

          // Store user info in session (optional)
          localStorage.removeItem("currentUser");
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              id: obj.id,
              email: obj.email,
              type: obj.type,
              name:obj.name,
              status: "logged in",
            })
          );
          $("form").trigger("reset");
          $("input").blur();
        }
      }
      return $(this);
    },

    isNameValid: function (name) {
      let isvalid = /^[a-zA-Z_]+(\w\s?){0,40}$/.test(name);
      $("#p1").toggle(!isvalid);
      if (!isvalid) $("input:eq(0)").focus();
      return isvalid;
    },
    isEmailValid: function (email) {
      let isvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
      $("#p3").toggle(!isvalid);
      if (!isvalid) $("input:eq(1)").focus();
      return isvalid;
    },
    isPassValid: function (password) {
      let isvalid = /^[\w+#?!@$%^&*-]{6,}$/.test(password);
      $("#p5").toggle(!isvalid);
      if (!isvalid) $("input:eq(2)").focus();
      return isvalid;
    },
    isconfpassValid: function (confirm) {
      let isvalid = $("input:eq(2)").val() == confirm;
      $("#p6").toggle(!isvalid);
      if (!isvalid) $("input:eq(3)").focus();
      return isvalid;
    },
  });
  
  $("button:first").on("click", function (e) {
    e.preventDefault();
    $(this).singup("customer");
  });

  $("button:last").on("click", function (e) {
    e.preventDefault();
    $(this).singup("seller");
  });
  
  
}); //end of load
// export {singup};
export { Customer, Seller, Admin};
