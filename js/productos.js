/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 *
 * TODO: El manejo del carrito se debe incluir dentro de las funciones que interactuan con el DOM.
 *
 */

const PRODUCT_OFFER = document.getElementsByClassName("product-offer");

const getArrayElementsNames = array => array.map(element => element.name);
const isAvailableElement = (element, array) => array.includes(element);
const calcSavings = (total1, total2) => total2 - total1;

class Product{
    constructor(id, name, fasPrice, competitionPrice){
        this.id = id;
        this.name = name;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
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

const cart = {
    products: [],
    fasTotal: 0,
    competitionTotal: 0,
    savings: 0,
    productList: "",
}

const stock = {
    availableProducts: [],
}

// Instantiation of Product Offer Cards
const productOfferCards = [(new ProductOfferCard("Plantas Medicinales", "Ponemos a tu disposición un amplio catálogo de plantas medicinales que podrás adquirir bajo pedido.", "./../assets/products/herbs.jpg")),
                           (new ProductOfferCard("Cápsulas", "Plantas, cortezas y vegetales son algunos de los artículos que podrás encontrar como encapsulados y para complementar tus dietas, o distintos tratamientos.", "./../assets/products/herb-capsules.jpg")),
                           (new ProductOfferCard("Extractos de Plantas", "Además de encapsulados y plantas en crudo, también tenemos para ti extractos de plantas que puedes tomar en disoluciones con alcohol o agua.", "./../assets/products/herb-extract.jpg")),
                           (new ProductOfferCard("Antibióticos", "Tenemos a la venta los antibióticos de tu receta médica a los mejores precios del mercado y de la mejor calidad", "./../assets/products/antibiotic.jpg")),
                           (new ProductOfferCard("Analgésicos", "Te duele la cabeza o necesitas algún analgésico prescrito por tu médico, contamos con un amplio catálogo de analgésicos para todo tipo de dolores.", "./../assets/products/analgesic.jpg")),
                           (new ProductOfferCard("Suministros Médicos", "Si te caíste o sufriste de alguna quemadura tenemos a tu disposición vendas, gasas, alcohol y otros suministros médicos de uso común a los mejores precios.", "./../assets/products/medical-supplies.jpg"))];

// Instantiation of products
const paracetamol = new Product("paracetamol", 50, 60);
const amlodipine = new Product("amlodipino", 100, 120);
const omeprazole = new Product("omeprazol", 150, 180);
const amoxicillin = new Product("amoxicilina", 200, 240);
const ibuprofen = new Product("ibuprofeno", 250, 300);

stock.availableProducts.push(paracetamol, amlodipine, omeprazole, amoxicillin, ibuprofen);

const availableProductsList = getElementList(stock.availableProducts, "-", false);

const availableProductsNames = getArrayElementsNames(stock.availableProducts);

let cartProductsNames;

let menuOpt;

// Main code

insertHTML(PRODUCT_OFFER, productOfferCards.slice(0,4));
insertHTML(PRODUCT_OFFER, productOfferCards.slice(3));

do {
    menuOpt = prompt("Ingrese \"comparar\" para ver la lista de productos, \"carrito\" para ver los productos seleccionados o \"salir\" para cerrar el comparador de precios.").toLowerCase();
    switch (menuOpt){
        case "comparar":
            do {
                menuOpt = prompt("Ingrese el nombre del producto que desea comparar o \"regresar\" para volver al menú anterior\n" + availableProductsList).toLowerCase();
                if (isAvailableElement(menuOpt, availableProductsNames)){
                    cart.products.push(stock.availableProducts[availableProductsNames.indexOf(menuOpt)]);
                    cartProductsNames = getArrayElementsNames(cart.products);
                    cart.products[cartProductsNames.indexOf(menuOpt)].comparePrices();
                } else if (menuOpt !== "regresar"){
                    alert("El producto ingresado no se encuentra en el inventario o se ingreso un dato incorrecto.");
                }
            } while (isAvailableElement(menuOpt, availableProductsNames) || menuOpt !== "regresar");
            break;
        case "carrito":
            if (cart.products.length > 0){
                showCartDetails();
            } else {
                alert("No hay productos en el carrito.");
            }
            break;
        case "salir":
            alert("Gracias por usar el comparador de precios de Farmacias Ángeles de la Salud.");
            break;
        default:
            alert("Opción inválida.");
            break;
    }
}while (menuOpt !== "salir");
// EOF

function calcCartTotalPrices(){
    let total = [0, 0];

    for (const product of cart.products) {
        total[0] = total[0] + product.fasPrice;
        total[1] += product.competitionPrice;
    }
    return total;
}

function getElementList(array, listBullet, includePrice){
    let list = "";
    array.forEach(element => {
        if (includePrice){
            list += `${listBullet} ${element.name.charAt(0).toUpperCase() + element.name.slice(1)} $${element.fasPrice} $${element.competitionPrice}\n`;
        } else {
            list += `${listBullet} ${element.name.charAt(0).toUpperCase() + element.name.slice(1)}\n`;
        }
    });
    return list;
}

function showCartDetails(){
    let total = calcCartTotalPrices();
    cart.fasTotal = total[0];
    cart.competitionTotal = total[1];
    cart.productList = getElementList(cart.products, "•", true);
    cart.savings = calcSavings(cart.fasTotal, cart.competitionTotal);

    alert(`Producto     Precio FAS    Precio Competencia\n${cart.productList}\nEl total a pagar en Farmacias Ángeles de la Salud es de $${cart.fasTotal}.\nEl total a pagar en la competencia es de $${cart.competitionTotal}.\n\nSi compra en Farmacias Ángeles de la Salud usted ahorra $${cart.savings}.`);
}

function insertHTML(htmlElement, array){
    for (const element of array) {
        htmlElement.innerHTML(`<article class="product-offer-card">
        <section class="flip">
            <!-- Front part of flip card -->
            <section class="flip__front">
                <img src="${element.cardImg}">
                <h4>${element.cardTitle}</h4>
            </section>
            <!-- Back part of flip card -->
            <section class="flip__back">
                <img src="${element.cardImg}">
                <p class="txt-center">
                    ${element.cardDescription}
                </p>
            </section>
        </section>
        </article>`);
    }
}