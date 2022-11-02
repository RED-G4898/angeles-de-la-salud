import { addClass, removeClass, toggleClass, hasClass, insertHtml, addHtml, getArrayOfObjectProp, getArrayList } from "./JSUtils.js";
import { Product, ProductOfferCard, cart, stock, insertOfferCardHTML, insertProductCardHTML } from "./ProductComparator.js";

const genericosProductCardSection = document.getElementById("available-genericos");
const genericosProductCardButton = document.getElementById("available-genericos-button");

// Productos disponibles
stock.availableGenericos.push(
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

/* genericosProductCardButton.onclick = () => {toggleClass("available-genericos", "available-products-cards_hidden")}; */