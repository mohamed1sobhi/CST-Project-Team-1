import { getProducts } from './productstore.js';
const sold= document.getElementById('triggerButton');
sold.addEventListener('click', () => {
    const products = getProducts();
    console.log('Selected products:', products);
});
