// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10, description: "Description 1" },
    { id: 2, name: "Product 2", price: 20, description: "Description 2" },
    { id: 3, name: "Product 3", price: 15, description: "Description 3" },
];

let cart = [];
let orderHistory = [];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
    displayVideo();
    displayOrderHistory();
    
    document.getElementById("filter-input").addEventListener("input", filterProducts);
});

function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function filterProducts() {
    const filterText = document.getElementById("filter-input").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterText));
    displayProducts(filteredProducts);
}

function sortProducts() {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    orderHistory.push([...cart]);
    cart = [];
    displayCart();
    displayOrderHistory();
}

function displayOrderHistory() {
    const ordersContainer = document.getElementById("orders");
    ordersContainer.innerHTML = "";
    orderHistory.forEach((order, orderIndex) => {
        const orderDiv = document.createElement("div");
        orderDiv.className = "order";
        orderDiv.innerHTML = `
            <h3>Order ${orderIndex + 1}</h3>
            ${order.map(item => `<p>${item.name} - $${item.price}</p>`).join('')}
        `;
        ordersContainer.appendChild(orderDiv);
    });
}

function displayVideo() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}
