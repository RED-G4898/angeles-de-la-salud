/*
 *
 * This script was made by RED with ❤ for Angeles de la Salud
 * as a project of JavaScript course by CoderHouse
 *
 * The script serve as a kind of data modeler to determine how
 * data is treated and how it is displayed in the HTML.
 *
 * Last update:
 *
 */

import { toFirstLetterUpperCase } from "./JSUtils.js";

class Product{ // Definiction of Product class
    constructor(id, name, description, fasPrice, competitionPrice, img, category){
        this.id = id;
        this.name = name;
        this.description = description;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
        this.img = img;
        this.category = category;
    }
}

class ProductOfferCard{
    constructor(cardTitle, cardDescription, cardImg) {
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;
        this.cardImg = cardImg;
    }
}

const cart = { // Store products selected by the user and other data related to prices and products.
    products: [],
    fasTotal: 0,
    competitionTotal: 0,
    savings: 0,
}

const stock = { // Helps to check if a product is available to be added to the cart.
    availableProducts: [],
}

export const productOfferCardTemplate = (cardImg, cardTitle, cardDescription) => /* html */`
	<article class="flip-card">
		<section class="flip-card-content">
			<section class="flip-card-content-front">
				<div class="flip-card-content-front-img">
					<img
						class="flip-card-content-front-img__file"
						src="${cardImg}"
						alt="" />
				</div>
				<div class="flip-card-content-front-title">
					<h5 class="flip-card-content-front-title__text">${cardTitle}</h5>
				</div>
			</section>
			<section class="flip-card-content-back">
				<div class="flip-card-content-back-img">
					<img
						class="flip-card-content-back-img__file"
						src="${cardImg}"
						alt="" />
				</div>
				<div class="flip-card-content-back-content f_center">
					<h5 class="flip-card-content-back-content__title">${cardTitle}</h5>
					<p class="w-80">${cardDescription}</p>
				</div>
			</section>
		</section>
	</article>
`;

export const productCardTemplate = (index, cardImg, cardTitle, cardDescription, fasPrice, competitionPrice) => /* html */`
<article class="flip-card">
    <section class="flip-card-content">
        <section class="flip-card-content-front">
            <div class="flip-card-content-front-img">
                <img
                    class="flip-card-content-front-img__file"
                    src="${cardImg}"
                    alt="" />
            </div>
            <div class="flip-card-content-front-title">
                <h5 class="flip-card-content-front-title__text">${cardTitle}</h5>
            </div>
        </section>
        <section class="flip-card-content-back">
            <div class="flip-card-content-back-img">
                <img
                    class="flip-card-content-back-img__file"
                    src="${cardImg}"
                    alt="" />
            </div>
            <div class="flip-card-content-back-content">
                <h5 class="flip-card-content-back-content__title">${cardTitle}</h5>
                <p>${cardDescription}</p>
                <h6>Precio en Ángeles de la Salud</h6>
                <p>$${fasPrice}</p>
                <h6>Precio en la competencia</h6>
                <p>$${competitionPrice}</p>
                <div id="flip-card-btn" class="flip-card-button" data-index="${index}">
                    <p>Comparar precio</p>
                </div>
            </div>
        </section>
    </section>
</article>
`;

export function calcTotals(){
    cart.fasTotal = 0;
    cart.competitionTotal = 0;
    cart.savings = 0;
    for (const product of cart.products) {
        cart.fasTotal = Number(cart.fasTotal) + Number(product.fasPrice);
        cart.competitionTotal = Number(cart.competitionTotal) + Number(product.competitionPrice);
    }
    cart.savings = Number(cart.competitionTotal) - Number(cart.fasTotal);
}

function insertOfferCardHTML(htmlElement, array){
    for (const element of array) {
        htmlElement.innerHTML += productOfferCardTemplate(element.cardImg, toFirstLetterUpperCase(element.cardTitle), element.cardDescription);
    }
}

function insertProductCardHTML(htmlElement, array){
    for (const element of array) {
        htmlElement.innerHTML += productCardTemplate(element.img, toFirstLetterUpperCase(element.name), element.description, element.fasPrice, element.competitionPrice);
    }
}

function insertTotalsHTML(){
    if (cart.fasTotal <= 0) {
        return ``;
    }
    return /* html */`
    <h5 class="h5_dark">Total en Ángeles de la Salud</h5>
    <p>$${cart.fasTotal}</p>
    <h5 class="h5_dark">Total en la competencia</h5>
    <p>$${cart.competitionTotal}</p>
    <h5 class="h5_dark">Ahorro comprando en Ángeles de la Salud</h5>
    <p>$${cart.savings}</p>
    `;
}

export { Product, ProductOfferCard, cart, stock, insertOfferCardHTML, insertProductCardHTML, insertTotalsHTML };