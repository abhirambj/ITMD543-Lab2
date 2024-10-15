const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 500, description: 'A high-performance laptop' },
    { id: 2, name: 'Book', category: 'books', price: 20, description: 'A must-read book' },
    { id: 3, name: 'T-shirt', category: 'clothing', price: 25, description: 'A comfortable t-shirt' },
];

const productGrid = document.getElementById('product-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const priceValue = document.getElementById('price-value');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');
const toggleThemeButton = document.getElementById('toggle-theme');

function displayProducts(products) {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productCard.addEventListener('click', () => openModal(product));
        productGrid.appendChild(productCard);
    });
}

function filterProducts() {
    const searchQuery = searchBar.value.toLowerCase();
    const category = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value, 10);

    const filteredProducts = products.filter(product => {
        return (
            (category === 'all' || product.category === category) &&
            product.name.toLowerCase().includes(searchQuery) &&
            product.price <= maxPrice
        );
    });
    displayProducts(filteredProducts);
}

function openModal(product) {
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

toggleThemeButton.addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
});

searchBar.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', (event) => {
    priceValue.textContent = event.target.value;
    filterProducts();
});

// Initial display
displayProducts(products);
