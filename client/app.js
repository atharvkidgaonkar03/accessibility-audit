import { fetchProducts } from "./api.js";

let products = [];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const categoryTabs = document.getElementById("categoryTabs");
const sortSelect = document.getElementById("sortSelect");
const productList = document.getElementById("productList");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

async function loadProducts() {
  try {
    products = await fetchProducts();

    loadingMessage.hidden = true;

    displayCategories();

const savedSearch = localStorage.getItem("productSearch");
const savedCategory = localStorage.getItem("productCategory");
const savedSort = localStorage.getItem("productSort");

if (savedSearch) {
  searchInput.value = savedSearch;
}

if (savedCategory) {
  categoryFilter.value = savedCategory;
}

if (savedSort) {
  sortSelect.value = savedSort;
}

sortProducts();

  } catch (error) {
    loadingMessage.hidden = true;
    errorMessage.textContent = "Unable to load products. Please try again.";
    errorMessage.hidden = false;
  }
}

loadProducts();

function displayProducts(productsToDisplay) {
  productList.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>

      <button type="button" class="add-cart-button">
        Add to Cart
      </button>
    `;

    const addButton = article.querySelector(".add-cart-button");

    addButton.addEventListener("click", () => {
      addToCart(product);
    });

    productList.appendChild(article);
  });
}

function displayCategories() {
  const categories = [...new Set(products.map((product) => product.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.setAttribute("role", "tab");

    button.addEventListener("click", () => {
      categoryFilter.value = category;
      filterProducts();
    });

    categoryTabs.appendChild(button);
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

searchInput.addEventListener("input", filterProducts);

function saveSearchPreference() {
  localStorage.setItem("productSearch", searchInput.value);
}

searchInput.addEventListener("input", saveSearchPreference);

categoryFilter.addEventListener("change", filterProducts);

function saveCategoryPreference() {
  localStorage.setItem("productCategory", categoryFilter.value);
}

categoryFilter.addEventListener("change", saveCategoryPreference);

function sortProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortSelect.value;

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "name") {
    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  displayProducts(filteredProducts);
}

sortSelect.addEventListener("change", sortProducts);

function saveSortPreference() {
  localStorage.setItem("productSort", sortSelect.value);
}

sortSelect.addEventListener("change", saveSortPreference);


// Authentication simulation

const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const authMessage = document.getElementById("authMessage");
const loginEmail = document.getElementById("loginEmail");

function updateAuthenticationUI() {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    authMessage.textContent = `Logged in as ${loggedInUser}`;
    loginEmail.value = loggedInUser;
    loginEmail.disabled = true;
    logoutButton.hidden = false;
  } else {
    authMessage.textContent = "You are not logged in.";
    loginEmail.disabled = false;
    logoutButton.hidden = true;
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginEmail.value;

  localStorage.setItem("loggedInUser", email);

  updateAuthenticationUI();
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");

  loginForm.reset();

  updateAuthenticationUI();
});

updateAuthenticationUI();

// Shopping cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0.00";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price.toFixed(2)}</p>

      <label for="quantity-${item.id}">
        Quantity:
      </label>

      <input
        type="number"
        id="quantity-${item.id}"
        min="1"
        value="${item.quantity}"
      >

      <button type="button" data-id="${item.id}" class="remove-cart-item">
        Remove
      </button>
    `;

    const quantityInput = article.querySelector("input");

    quantityInput.addEventListener("change", () => {
      const newQuantity = Number(quantityInput.value);

      if (newQuantity < 1) {
        quantityInput.value = item.quantity;
        return;
      }

      item.quantity = newQuantity;

      saveCart();
      displayCart();
    });

    const removeButton = article.querySelector("button");

    removeButton.addEventListener("click", () => {
      cart = cart.filter((cartItem) => cartItem.id !== item.id);

      saveCart();
      displayCart();
    });

    cartList.appendChild(article);

    total += item.price * item.quantity;
  });

  cartTotal.textContent = total.toFixed(2);
}

function addToCart(product) {
  const existingItem = cart.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    });
  }

  saveCart();
  displayCart();
}

displayCart();