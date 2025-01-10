import { getProducts } from "./productstore.js";
window.onload = function() { 
    let products = getProducts();
    let totalProducts = Object.keys(products).length;

    if (localStorage.getItem('count')) { 
        let count = parseInt(localStorage.getItem('count'));
        let total = document.getElementById('total');
        total.innerText = `${totalProducts}`;
        let number = document.getElementById('counter'); 
        number.innerText = "/"+count; 
        let progress = document.getElementById("progress");
        progress.style.width = (count / totalProducts * 100) + '%';
    } 

    if (localStorage.getItem('countofpurchace')) { 
        let countofpurchace = parseInt(localStorage.getItem('countofpurchace'));
        let total1 = document.getElementById('total1');
        total1.innerText = `${totalProducts}`;
        let number = document.getElementById('counter1'); 
        number.innerText = "/"+countofpurchace; 
        let progress = document.getElementById("progress1");
        progress.style.width = (countofpurchace / totalProducts * 100) + '%';
    } 
};
