// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const categoryForm = document.getElementById('category-form');
    const productList = document.getElementById('product-list');

    // Sample data for products
    const products = [
        { name: 'Smartphone', category: 'electronics' },
        { name: 'Laptop', category: 'electronics' },
        { name: 'T-shirt', category: 'clothing' },
        { name: 'Jeans', category: 'clothing' },
        { name: 'Watch', category: 'accessories' },
        { name: 'Sunglasses', category: 'accessories' }
    ];

    // Event listener for form change event
    categoryForm.addEventListener('change', () => {
        // Get selected categories
        const selectedCategories = Array.from(
            document.querySelectorAll('input[type="checkbox"]:checked')
        ).map(input => input.value);

        // Filter products based on selected categories
        const filteredProducts = products.filter(product =>
            selectedCategories.includes(product.category)
        );

        // Update the product list with filtered products
        productList.innerHTML = filteredProducts.length
            ? filteredProducts.map(product => `<li>${product.name}</li>`).join('')
            : '<li>No products found for the selected categories.</li>';
    });
});
