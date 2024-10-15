// Sample data for products
const products = [
    { name: "T-shirt", category: "clothing", price: 25 },
    { name: "Jeans", category: "clothing", price: 50 },
    { name: "Laptop", category: "electronics", price: 999 },
    { name: "Phone", category: "electronics", price: 799 },
    { name: "Blender", category: "appliances", price: 120 },
    { name: "Headphones", category: "electronics", price: 150 },
    { name: "Shoes", category: "clothing", price: 75 },
];

// Function to display the products based on filters
function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous products

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product";
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Filter products based on category and price
function filterProducts() {
    const categorySelect = document.getElementById("category");
    const maxPriceInput = document.getElementById("maxPrice");

    const selectedCategory = categorySelect.value;
    const maxPrice = parseInt(maxPriceInput.value);

    const filteredProducts = products.filter(product => {
        return (selectedCategory === "all" || product.category === selectedCategory) &&
            product.price <= maxPrice;
    });

    displayProducts(filteredProducts);
}

// Update displayed max price value
function updatePriceValue() {
    const maxPriceInput = document.getElementById("maxPrice");
    const priceValue = document.getElementById("priceValue");
    priceValue.textContent = maxPriceInput.value;
}

// Dark mode toggle functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listeners for filtering and dark mode toggle
document.getElementById("category").addEventListener("change", filterProducts);
document.getElementById("maxPrice").addEventListener("input", () => {
    updatePriceValue();
    filterProducts();
});
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Initial display of all products
displayProducts(products);
