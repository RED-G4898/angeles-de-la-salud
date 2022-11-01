class Product{ // Definiction of Product class
    constructor(name, fasPrice, competitionPrice, img, description){
        this.name = name;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
        this.img = img;
        this.description = description;
    }
    comparePrices(){
        alert(`El precio de "${this.name.charAt(0).toUpperCase() + this.name.slice(1)}" en Farmacias Ángeles de la Salud es de $${this.fasPrice}.\nEn la competencia el precio es de $${this.competitionPrice}.\n\nSi compra en Farmacias Ángeles de la Salud usted ahorra $${calcSavings(this.fasPrice,this.competitionPrice)}.`);
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
    productList: "",
}

const stock = { // Helps to check if a product is available to be added to the cart.
    availableGenericos: [],
    availableNaturales: [],
}

const productOfferCardTemplate = (cardImg, cardTitle, cardDescription) => `
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
				</div>
			</section>
		</section>
	</article>
`;

const productCardTemplate = (cardImg, cardTitle, cardDescription, fasPrice, competitionPrice) => `
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
                <button>prueba</button>
            </div>
        </section>
    </section>
</article>
`;

function insertOfferCardHTML(htmlElement, array){
    for (const element of array) {
        htmlElement.innerHTML += productOfferCardTemplate(element.cardImg, element.cardTitle, element.cardDescription);
    }
}

function insertProductCardHTML(htmlElement, array){
    for (const element of array) {
        htmlElement.innerHTML += productCardTemplate(element.img, element.name, element.description, element.fasPrice, element.competitionPrice);
    }
}

export { Product, ProductOfferCard, cart, stock, insertOfferCardHTML, insertProductCardHTML };