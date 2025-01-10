
window.onload = function() { 
    if (localStorage.getItem('count')) { 
        let count = parseInt(localStorage.getItem('count'));
        console.log(count); 
        let number = document.getElementById('counter'); 
        number.innerText = count; 
        let progress = document.getElementById("progress");
        progress.style.width = parseInt(count) * 1 + '%';
        
    } 
    if (localStorage.getItem('countofpurchace')) { 
        let countofpurchace = parseInt(localStorage.getItem('countofpurchace'));
        console.log(countofpurchace); 
        let number = document.getElementById('counter1'); 
        number.innerText = countofpurchace; 
        let progress = document.getElementById("progress1");
        progress.style.width = parseInt(countofpurchace) * 1 + '%';
        
    } 
};
