// Sample product data
const products = [
    { name: "T-shirt", category: "clothing", price: 25 },
    { name: "Smartphone", category: "electronics", price: 299 },
    { name: "Laptop", category: "electronics", price: 899 },
    { name: "Book", category: "books", price: 15 },
    { name: "Headphones", category: "electronics", price: 150 },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("searchInput");
const toggleDarkMode = document.getElementById("toggleDarkMode");
let isDarkMode = false;

// Function to display products
function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
}

// Filter products
function filterProducts() {
    const category = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);
    const searchQuery = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return (
            (category === "all" || product.category === category) &&
            product.price <= maxPrice &&
            product.name.toLowerCase().includes(searchQuery)
        );
    });

    displayProducts(filteredProducts);
}

// Event listeners for filters
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", () => {
    priceValue.textContent = priceFilter.value;
    filterProducts();
});
searchInput.addEventListener("input", filterProducts);

// Toggle dark mode
toggleDarkMode.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
});

// Initialize page with all products
displayProducts(products);
