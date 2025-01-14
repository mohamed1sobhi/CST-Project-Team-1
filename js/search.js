// Get the search input and button elements
const searchInput = document.querySelector('input[type="search"]');
const searchButton = document.querySelector('button[type="submit"]');

// Function to perform the search
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const table = document.getElementById('body');
    const rows = Array.from(table.getElementsByTagName('tr'));

    rows.forEach(tr => {
        const productName = tr.cells[1].textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    });
}

// Add event listeners
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchProducts();
});

// Change the input event listener to trigger on every keystroke
searchInput.addEventListener('input', searchProducts);
