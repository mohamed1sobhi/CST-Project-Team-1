function processOrdersData() {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyRevenue = new Array(12).fill(0);
    const monthlySales = new Array(12).fill(0);

    // Get data from localStorage
    const selledProducts = JSON.parse(localStorage.getItem('selledProducts')) || [];
    const products=JSON.parse(localStorage.getItem("products")) || []

    selledProducts.forEach(selledProduct => {
        const saleDate = new Date(selledProduct.addDate);
        const month = saleDate.getMonth();
        
        // Find matching product to get price
        const matchingProduct = products.find(p =>String(p.productid) === selledProduct.id);
        const price = matchingProduct ? matchingProduct.price : 0;
        
        // Add to revenue (price * quantity)
        monthlyRevenue[month] += parseFloat(price * selledProduct.quantity) || 0;
        
        // Add to sales count (quantity sold)
        monthlySales[month] += parseInt(selledProduct.quantity) || 0;
    });

    return {
        months: monthNames,
        revenue: monthlyRevenue,
        sales: monthlySales
    };
}
