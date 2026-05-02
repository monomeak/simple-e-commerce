const products = [
  {
    id: 1,
    name: "Basic White T-Shirt",
    price: 12,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: 35,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 45,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923"
  },
  {
    id: 4,
    name: "Casual Shirt",
    price: 25,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  }
];

let cartCount = 0;
let cartTotal = 0;

const productContainer = document.getElementById("product-container");
const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");

function displayProducts() {
  products.forEach(function(product) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Comfortable clothing for daily use.</p>
      <p class="price">$${product.price}</p>
      <button onclick="addToCart(${product.price})">Add to Cart</button>
    `;

    productContainer.appendChild(productCard);
  });
}

function addToCart(price) {
  cartCount++;
  cartTotal += price;

  cartCountElement.textContent = cartCount;
  cartTotalElement.textContent = cartTotal;
}

displayProducts();
