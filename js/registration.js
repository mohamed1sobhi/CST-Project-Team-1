// import {customerDB,sellerDB,adminDB,productsDB} from './dbschema';
<<<<<<< HEAD
class Customer {
  constructor(id, name, email, password, cart = [], likedProducts = []) {
    this.id = id;
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
    this.name = name;
    this.email = email;
    this.password = password;
=======
class Customer{
  constructor(name,email,password,cart=[],linkedProduct=[],contact=[]){
    this.name=name;
    this.email=email;
    this.password=password;
    this.cart=cart;
    this.linkedProduct=linkedProduct;
    this.contact=contact;
  }
}
class Seller{
  constructor(name,email,password,contact=[]){
    this.name=name;
    this.email=email;
    this.password=password;
    this.contact=contact;
  
>>>>>>> 3a4c04bb3f108032fb58aefee9ada274cff63aaa
  }
}
class Admin {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
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
      pass = $(this).isPassValid($("input:eq(2)").val());
      confpass = $(this).isconfpassValid($("input:eq(3)").val());
      email = $(this).isEmailValid($("input:eq(1)").val());
      Name = $(this).isNameValid($("input:eq(0)").val());

      $("input").on("input", function () {
        $(this).parent().find("p").hide();
      });

<<<<<<< HEAD
      if (
        Name === true &&
        email === true &&
        pass === true &&
        confpass === true
      ) {
        let user = JSON.parse(localStorage.getItem(account)) || [];
        // let user=getUsers(account)||[];
=======
          // Check for existing name and emailgit
            let alluser=JSON.parse(localStorage.getItem("customer"))||[].concat(JSON.parse(localStorage.getItem("seller"))||[]);
              let nameExist = alluser.some(e => e.name === $("input:eq(0)").val());
              let emailExist = alluser.some(e => e.email === $("input:eq(1)").val());
>>>>>>> 3a4c04bb3f108032fb58aefee9ada274cff63aaa

        // Check for existing name and email
        let nameExist = user.some((e) => e.name === $("input:eq(0)").val());
        let emailExist = user.some((e) => e.email === $("input:eq(1)").val());

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
          if (account == "customer") {
            obj = new Customer(
              $("input:eq(0)").val(),
              $("input:eq(1)").val(),
              $("input:eq(2)").val()
            );
          } else {
            obj = new Seller(
              $("input:eq(0)").val(),
              $("input:eq(1)").val(),
              $("input:eq(2)").val()
            );
          }
          // addUser(user,obj);

          user.push(obj);
          localStorage.setItem(account, JSON.stringify(user));
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

<<<<<<< HEAD
export { Customer, Seller, Admin };
=======

>>>>>>> 3a4c04bb3f108032fb58aefee9ada274cff63aaa
