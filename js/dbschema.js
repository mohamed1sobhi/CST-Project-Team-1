import Dexie from "./dexie.js";

// Initialize the Customer database
const customerDB = new Dexie("CustomerDatabase");
customerDB.version(1).stores({
  customers: "++id,name,email,password,cart,likedProducts",
});

// Initialize the Seller database
const sellerDB = new Dexie("SellerDatabase");
sellerDB.version(1).stores({
  sellers: "++id,name,email,password",
});

// Initialize the Admin database
const adminDB = new Dexie("AdminDatabase");
adminDB.version(1).stores({
  admins: "++id,name,email,password",
});

// Initialize the Products database
const productsDB = new Dexie("ProductsDatabase");
productsDB.version(1).stores({
  products: "++id,name,price,cost,stock,active",
});

// Open the databases
Promise.all([
  customerDB.open(),
  sellerDB.open(),
  adminDB.open(),
  productsDB.open(),
]).catch((error) => {
  console.error("Failed to open one or more databases:", error);
});

export { customerDB, sellerDB, adminDB, productsDB };
