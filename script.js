const products = [
    { name: "T-shirt", category: "clothing", price: 25 },
    { name: "Jeans", category: "clothing", price: 50 },
    { name: "Toaster", category: "appliances", price: 60 },
    { name: "Lipstick", category: "beauty", price: 25 },
    { name: "Foundation", category: "beauty", price: 40 },
    { name: "Football", category: "sports", price: 50 },
    { name: "Sneakers", category: "footwear", price: 80 },
    { name: "Blender", category: "appliances", price: 100 },
    { name: "Mascara", category: "beauty", price: 30 },
    { name: "Basketball", category: "sports", price: 30 },
    { name: "Dress Shirt", category: "clothing", price: 60 },
    { name: "Coffee Maker", category: "appliances", price: 120 },
    { name: "Eyeshadow Palette", category: "beauty", price: 50 },
    { name: "Soccer Ball", category: "sports", price: 20 },
    { name: "Hoodie", category: "clothing", price: 40 },
    { name: "Microwave", category: "appliances", price: 150 },
    { name: "Lip Gloss", category: "beauty", price: 15 },
    { name: "Tennis Racket", category: "sports", price: 80 },
    { name: "Sweater", category: "clothing", price: 70 },
    { name: "Vacuum Cleaner", category: "appliances", price: 200 },
];

const productContainer = document.getElementById("products");
const categoryFilter = document.getElementById("category");
const priceFilter = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const searchInput = document.getElementById("search");
const darkModeButton = document.getElementById("toggle-dark-mode");
const noProductsSection = document.getElementById("no-products");

function displayProducts(filteredProducts) {
    productContainer.innerHTML = "";
    noProductsSection.style.display = "none";

    if (filteredProducts.length === 0) {
        noProductsSection.style.display = "block";
    } else {
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
            `;
            productContainer.appendChild(productCard);
        });
    }
}

function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const maxPrice = priceFilter.value;
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return (selectedCategory === "all" || product.category === selectedCategory) &&
            product.price <= maxPrice &&
            product.name.toLowerCase().includes(searchText);
    });

    displayProducts(filteredProducts);
}

// Initial Display
filterProducts();

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("input", () => {
    priceValue.textContent = priceFilter.value;
    filterProducts();
});
searchInput.addEventListener("input", filterProducts);

// Toggle dark mode
darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".product-card").forEach((card) => card.classList.toggle("dark-card"));
    document.querySelector("footer").classList.toggle("dark-mode");
    noProductsSection.classList.toggle("dark-mode");
});
