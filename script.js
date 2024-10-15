const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 300, description: "A great laptop" },
    { id: 2, name: "Book", category: "books", price: 20, description: "A great book" },
    { id: 3, name: "TV", category: "electronics", price: 600, description: "A great TV" },
    { id: 4, name: "Desk", category: "furniture", price: 150, description: "A great desk" },
    { id: 5, name: "Tablet", category: "electronics", price: 200, description: "A great tablet" },
];

const productGrid = document.getElementById("product-grid");
const searchBar = document.getElementById("search-bar");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");

// Function to display products
function displayProducts(products) {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productCard.addEventListener("click", () => {
            openModal(product);
        });
        productGrid.appendChild(productCard);
    });
}

// Function to filter products
function filterProducts() {
    const searchQuery = searchBar.value.toLowerCase();
    const category = categoryFilter.value;
    const maxPrice = priceFilter.value;
    const filteredProducts = products.filter(product => {
        return (category === 'all' || product.category === category) &&
            product.name.toLowerCase().includes(searchQuery) &&
            product.price <= maxPrice;
    });
    displayProducts(filteredProducts);
}

// Event listeners
searchBar.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", filterProducts);

// Modal functions
function openModal(product) {
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Initial load
displayProducts(products);
