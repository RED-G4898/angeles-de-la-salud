/*
 *
 * This script was made by RED with ❤ for Angeles de la Salud
 * as a project of JavaScript course by CoderHouse
 *
 * The script serve as the main script of productos.html file
 * and it's purpose is to handle the logic of the page and
 * the interaction with the user.
 *
 * The script is divided in 2 parts:
 * 1. Global variables
 * 2. Event listeners
 *
 * Last update:
 *
 */

import { getArrayList } from "./JSUtils.js";
import { Product, ProductOfferCard, cart, stock, insertOfferCardHTML, insertProductCardHTML, insertTotalsHTML } from "./ProductComparator.js";


// DOM Elements
const naturalesOffer = document.getElementById("product-offer-naturales");
const genericosOffer = document.getElementById("product-offer-genericos");

const genericosProductBand = document.getElementById("available-genericos-band");
const genericosProductCardButton = document.getElementById("available-genericos-button");
const genericosProductCardSection = document.getElementById("available-genericos");
const cartBtn = document.getElementById("cart");
const cartModal = document.getElementById("cart-modal");
const cartContent = document.getElementById("cart-content-container");
const cartCloseBtn = document.getElementById("cart-content-close-btn");
const cartEmptyBtn = document.getElementById("cart-content-empty-btn");
const cartList = document.getElementById("cart-content-list");
const addProductBtns = document.getElementsByClassName("flip-card-button");
const cartTotals = document.getElementById("cart-content-totals");

// Offered products
const productNaturalesOfferCards = [(new ProductOfferCard("Plantas Medicinales", "Ponemos a tu disposición un amplio catálogo de plantas medicinales que podrás adquirir bajo pedido.", "./../assets/products/herbs.jpg")),
                                    (new ProductOfferCard("Cápsulas", "Plantas, cortezas y vegetales son algunos de los artículos que podrás encontrar como encapsulados y para complementar tus dietas, o distintos tratamientos.", "./../assets/products/herb-capsules.jpg")),
                                    (new ProductOfferCard("Extractos de Plantas", "Además de encapsulados y plantas en crudo, también tenemos para ti extractos de plantas que puedes tomar en disoluciones con alcohol o agua.", "./../assets/products/herb-extract.jpg"))];

const productGenericosOfferCards = [(new ProductOfferCard("Antibióticos", "Tenemos a la venta los antibióticos de tu receta médica a los mejores precios del mercado y de la mejor calidad", "./../assets/products/antibiotic.jpg")),
                                    (new ProductOfferCard("Analgésicos", "Te duele la cabeza o necesitas algún analgésico prescrito por tu médico, contamos con un amplio catálogo de analgésicos para todo tipo de dolores.", "./../assets/products/analgesic.jpg")),
                                    (new ProductOfferCard("Suministros Médicos", "Si te caíste o sufriste de alguna quemadura tenemos a tu disposición vendas, gasas, alcohol y otros suministros médicos de uso común a los mejores precios.", "./../assets/products/medical-supplies.jpg"))];

// Available products
stock.availableGenericos.push(
                            new Product("paracetamol", 50, 60, "https://cdn.shopify.com/s/files/1/0282/1321/5307/products/paracetamolalpharma_1200x1200.jpg", "Prueba"),
                            new Product("amlodipino", 100, 120, "https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/6/7/676524_378507986.jpg", "Prueba"),
                            new Product("omeprazol", 150, 180, "https://http2.mlstatic.com/gastritis-y-agruras-omeprazol-20mg-con-30-capsulas-D_NQ_NP_871250-MLM31237331355_062019-F.jpg", "Prueba"),
                            new Product("amoxicilina", 200, 240, "https://www.drogueriascafam.com.co/48740-large_default/comprar-en-cafam-amoxicilina-500-mg-caja-con-50-capsulas-precio.jpg", "Prueba"),
                            new Product("ibuprofeno", 250, 300, "https://medtempus.com/wp-content/uploads/2020/03/Ibuprofeno.jpg", "Prueba"),
                        );

// If cart.products has content, load it from local storage
if (localStorage.getItem("cart") !== null) {
    cart.products.push(...JSON.parse(localStorage.getItem("cart")));
}

// Insert offered products cards into HTML
insertOfferCardHTML(naturalesOffer, productNaturalesOfferCards);
insertOfferCardHTML(genericosOffer, productGenericosOfferCards);

// Insert available products cards into HTML
insertProductCardHTML(genericosProductCardSection, stock.availableGenericos);

// Collapse and expand available products section
genericosProductBand.onclick = () => {
    if (genericosProductCardSection.classList.contains("available-products-cards_hidden")) {
        genericosProductCardSection.classList.remove("available-products-cards_hidden");
        genericosProductCardButton.firstElementChild.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
    } else {
        genericosProductCardSection.classList.add("available-products-cards_hidden");
        genericosProductCardButton.firstElementChild.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");

    }
}

// Show cart modal
cartBtn.onclick = () => {
    cartModal.classList.remove("cart-modal_hidden");
    cartContent.innerHTML = getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice");
    insertTotalsHTML(cartTotals);
}

// Hide cart modal
cartCloseBtn.onclick = () => {
    cartModal.classList.add("cart-modal_hidden");
}

// Delete cart product
cartContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("bi-x")) {
        const cartListElement = event.target.parentElement.parentElement;
        const cartListElementIndex = cartListElement.getAttribute("index");
        cart.products.splice(cartListElementIndex, 1);
        cartContent.innerHTML = getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice");
        insertTotalsHTML(cartTotals);
    }
});

// Delete all cart products
cartEmptyBtn.onclick = () => {
    cart.products = [];
    cartContent.innerHTML = getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice");
    insertTotalsHTML(cartTotals);
}


// Add product to cart
Array.from(addProductBtns).forEach(btn => {
    btn.onclick = () => {
        const productIndex = Array.from(addProductBtns).indexOf(btn);
        cart.products.push(stock.availableGenericos[productIndex]);
        cartContent.innerHTML = getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice");
    }
});

// Save cart to local storage when window is closed
window.onbeforeunload = () => {
    localStorage.setItem("cart", JSON.stringify(cart.products));
}