const products = [
    { id: 1, name: "Smartphone X", price: 44999, rating: 4.5, category: "Electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "Laptop Pro", price: 96999, rating: 4.8, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Designer T-shirt", price: 2999, rating: 4.2, category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Smart Watch", price: 14999, rating: 4.6, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 5, name: "Wireless Earbuds", price: 9999, rating: 4.4, category: "Electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 6, name: "Yoga Mat", price: 1999, rating: 4.3, category: "Home", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 7, name: "Coffee Maker", price: 6999, rating: 4.7, category: "Home", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 8, name: "Running Shoes", price: 5999, rating: 4.5, category: "Apparel", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 9, name: "Skincare Set", price: 4499, rating: 4.6, category: "Beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 10, name: "Bluetooth Speaker", price: 5299, rating: 4.2, category: "Electronics", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 11, name: "Desk Lamp", price: 3699, rating: 4.4, category: "Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 12, name: "Sunglasses", price: 9999, rating: 4.3, category: "Apparel", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 13, name: "Backpack", price: 4499, rating: 4.5, category: "Apparel", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 14, name: "Fitness Tracker", price: 5999, rating: 4.1, category: "Electronics", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 15, name: "Blender", price: 2999, rating: 4.0, category: "Home", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 16, name: "Hair Dryer", price: 3699, rating: 4.2, category: "Beauty", image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 17, name: "Gaming Mouse", price: 4499, rating: 4.7, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 18, name: "Dress Shirt", price: 3399, rating: 4.3, category: "Apparel", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 19, name: "Air Purifier", price: 11999, rating: 4.6, category: "Home", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 20, name: "Makeup Palette", price: 2699, rating: 4.4, category: "Beauty", image: "https://images.unsplash.com/photo-1596704017254-9b121068fb49?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" }
];

const productTableBody = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceRange = document.getElementById('priceRange');
const minPriceInput = document.getElementById('minPriceInput');
const maxPriceInput = document.getElementById('maxPriceInput');
const sortSelect = document.getElementById('sortSelect');

function renderProducts(filteredProducts) {
    productTableBody.innerHTML = '';
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" class="product-image"></td>
            <td class="product-name">${product.name}</td>
            <td class="product-price">₹${product.price.toLocaleString('en-IN')}</td>
            <td>
                <span class="rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                ${product.rating.toFixed(1)}
            </td>
            <td><span class="badge category-badge category-${product.category}">${product.category}</span></td>
        `;
        productTableBody.appendChild(row);
    });
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const minPrice = parseInt(minPriceInput.value) || 0;
    const maxPrice = parseInt(maxPriceInput.value) || 75000;
    const sortBy = sortSelect.value;

    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) &&
        (selectedCategory === '' || product.category === selectedCategory) &&
        product.price >= minPrice && product.price <= maxPrice
    );

    if (sortBy) {
        const [field, order] = sortBy.split('-');
        filteredProducts.sort((a, b) => {
            if (order === 'asc') {
                return a[field] - b[field];
            } else {
                return b[field] - a[field];
            }
        });
    }

    renderProducts(filteredProducts);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceRange.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    maxPriceInput.value = value;
    filterProducts();
});
minPriceInput.addEventListener('input', () => {
    priceRange.value = maxPriceInput.value;
    filterProducts();
});
maxPriceInput.addEventListener('input', (e) => {
    priceRange.value = e.target.value;
    filterProducts();
});
sortSelect.addEventListener('change', filterProducts);

// Initial render
filterProducts();

// Set initial price values
minPriceInput.value = 0;
maxPriceInput.value = 75000;
priceRange.value = 75000;

