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

import $ from "./jquery.js";
import {Tabulator} from './tabulator_esm.min.js';
import { Grid } from './gridjs.production.es.min.js'
import { getArrayList, dataAccess } from "./JSUtils.js";
import { Product, ProductOfferCard, productOfferCardTemplate, productCardTemplate, cart, stock, insertOfferCardHTML, insertProductCardHTML, insertTotalsHTML, calcTotals } from "./ProductComparator.js";

const categories = await dataAccess("./../assets/data/category.json");
stock.availableProducts = await dataAccess("./../assets/data/product.json");

// Crear tabla simple con Tabulator que muestre los productos de cart.products y que actualice su contenido cada vez que se agrega un producto al carrito.
if (localStorage.getItem("cart") !== null) {
    cart.products.push(...JSON.parse(localStorage.getItem("cart")));
}

$("#product-offer-naturales").html(categories.filter(element => element.type === "naturales").map(element => productOfferCardTemplate(`https://spaces.redg.dev/angeles-de-la-salud/assets/productos/${element.img}`, element.name, element.description)));
$("#product-offer-genericos").html(categories.filter(element => element.type === "genericos").map(element => productOfferCardTemplate(`https://spaces.redg.dev/angeles-de-la-salud/assets/productos/${element.img}`, element.name, element.description)));

$("#available-genericos").html(stock.availableProducts.filter(element => element.category === "genericos").map(element => productCardTemplate(`https://spaces.redg.dev/angeles-de-la-salud/assets/productos/${element.image}`, element.name, element.description, element.fasPrice, element.competitionPrice)));

$("#available-genericos-band").click(() => {
    $("#available-genericos").toggleClass("available-products-cards_hidden");
    $("#available-genericos").hasClass("available-products-cards_hidden") ? $("#available-genericos-button").removeClass("bi-caret-up-fill").addClass("bi-caret-down-fill") : $("#available-genericos-button").removeClass("bi-caret-down-fill").addClass("bi-caret-up-fill");
});

$("#cart").click(() => {
    $("#cart-modal").removeClass("cart-modal_hidden");
    $("#cart-content-container").html(getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice"));
    calcTotals();
    $("#cart-content-totals").html(insertTotalsHTML());
});

$("#cart-content-close-btn").click(() => {
    $("#cart-modal").addClass("cart-modal_hidden");
});

$(".flip-card-button").click(function() {
    cart.products.push(stock.availableProducts[$(".flip-card-button").index(this)]);
});

$("#cart-content-container").on("click", ".cart-list__del-btn", function() {
    cart.products.splice($(".cart-list__del-btn").index(this), 1);
    $("#cart-content-container").html(getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice"));
    calcTotals();
    $("#cart-content-totals").html(insertTotalsHTML());
});

$("#cart-content-empty-btn").click(() => {
    cart.products = [];
    $("#cart-content-container").html(getArrayList("ul", "cart-content-list", "cart-content-list", "cart-content-list__element", cart.products, true, "name", "fasPrice", "competitionPrice"));
    calcTotals();
    $("#cart-content-totals").html(insertTotalsHTML());
});

window.onbeforeunload = () => {
    localStorage.setItem("cart", JSON.stringify(cart.products));
}