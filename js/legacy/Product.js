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
    availableProducts: [],
}