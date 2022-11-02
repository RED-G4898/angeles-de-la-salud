import { addClass, removeClass, toggleClass, hasClass, insertHtml, addHtml, getArrayOfObjectProp, getArrayList, toFirstLetterUpperCase } from "./JSUtils.js";
import { Product, ProductOfferCard, cart, stock, insertOfferCardHTML, insertProductCardHTML } from "./ProductComparator.js";

const genericosProductCardSection = document.getElementById("available-genericos");
const genericosProductCardButton = document.getElementById("available-genericos-button");
const cartBtn = document.getElementById("cart");
const cartModal = document.getElementById("cart-modal");
const cartContent = document.getElementById("cart-content");
const cartCloseBtn = document.getElementById("cart-content-btn");

// Productos disponibles
stock.availableGenericos.push(
                            new Product("paracetamol", 50, 60),
                            new Product("amlodipino", 100, 120),
                            new Product("omeprazol", 150, 180),
                            new Product("amoxicilina", 200, 240),
                            new Product("ibuprofeno", 250, 300)
                        );

cart.products.push(
                            new Product("paracetamol", 50, 60),
                            new Product("amlodipino", 100, 120),
                            new Product("omeprazol", 150, 180),
                            new Product("amoxicilina", 200, 240),
                            new Product("ibuprofeno", 250, 300)
                        );

const availableGenericos = getArrayOfObjectProp(stock.availableGenericos, "name");

insertProductCardHTML(genericosProductCardSection, stock.availableGenericos);

genericosProductCardButton.onclick = () => {
    if (genericosProductCardSection.classList.contains("available-products-cards_hidden")) {
        genericosProductCardSection.classList.remove("available-products-cards_hidden");
    } else {
        genericosProductCardSection.classList.add("available-products-cards_hidden");
    }
}

cartBtn.onclick = () => {
    cartModal.classList.remove("cart-modal_hidden");
    cartContent.insertAdjacentHTML("beforeend", getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, "name", "fasPrice", "competitionPrice"));
}

cartCloseBtn.onclick = () => {
    const cartList = document.getElementById("cart-content-list");
    cartList.remove();
    cartModal.classList.add("cart-modal_hidden");
}


/* genericosProductCardButton.onclick = () => {toggleClass("available-genericos", "available-products-cards_hidden")}; */