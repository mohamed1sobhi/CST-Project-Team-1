
window.onload = function() { 
    if (localStorage.getItem('count')) { 
        let count = parseInt(localStorage.getItem('count'));
        console.log(count); 
        let number = document.getElementById('counter'); 
        number.innerText = count; 
        let progress = document.getElementById("progress");
        progress.style.width = parseInt(count) * 1 + '%';
        
    } 
};
