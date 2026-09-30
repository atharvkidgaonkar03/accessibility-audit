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
    `;

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