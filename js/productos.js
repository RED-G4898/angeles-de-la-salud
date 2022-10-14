/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 */

const calcSavings = (total1, total2) => total2 - total1;

const isCorrectOption = option => availableMenuOptions.includes(option);

class Product{
    constructor(name, fasPrice, competitionPrice){
        this.name = name;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
    }

    comparePrices(){
        alert(`El precio de "${this.name.charAt(0).toUpperCase() + this.name.slice(1)}" en Farmacias Ángeles de la Salud es de $${this.fasPrice}.\nEn la competencia el precio es de $${this.competitionPrice}.\n\nSi compra en Farmacias Ángeles de la Salud usted ahorra $${calcSavings(this.fasPrice,this.competitionPrice)}.`);
    }
}

const cart = {
    products: [],
    fasTotal: 0,
    competitionTotal: 0,
    savings: 0,
    productList: "",
}

let menuOpt;
let availableMenuOptions = [];
let availableProductsList = "";

// Main code

const paracetamol = new Product("paracetamol", 50, 60);
const amlodipine = new Product("amlodipino", 100, 120);
const omeprazole = new Product("omeprazol", 150, 180);
const amoxicillin = new Product("amoxicilina", 200, 240);
const ibuprofen = new Product("ibuprofeno", 250, 300);

availableMenuOptions.push(paracetamol, amlodipine, omeprazole, amoxicillin, ibuprofen);

availableProductsList = obtainAvailableProductsList(availableMenuOptions);
availableMenuOptions = obtainAvailableMenuOptions(availableMenuOptions);

showCartDetails()

alert("Bienvenido al comparador de precios de Farmacias Ángeles de la Salud.");
menuOpt = prompt("Desea comparar el precio de algún producto? (si/no)").toLowerCase();
while (menuOpt !== "no" && menuOpt !== "si") {
    menuOpt = prompt("Opción incorrecta, por favor ingrese una opción valida (si/no)").toLowerCase();
}

while (menuOpt !== "no" && menuOpt !== "s") {
    menuOpt = prompt("Ingrese el nombre del producto que desea comparar, \"carrito\" para ver los productos que ha seleccionado o \"s\" para salir:\nProductos Disponibles:\n" + availableProductsList).toLowerCase();
    while (!isCorrectOption(menuOpt) && menuOpt !== "carrito" && menuOpt !== "s") {
        menuOpt = prompt("Opción incorrecta, por favor ingrese una opción valida: (s para salir o carrito para ver los productos que ha seleccionado)\nProductos Disponibles:\n" + availableProductsList).toLowerCase();
    }
    if (menuOpt !== "no" && menuOpt !== "s") {
        switch (menuOpt){
            case "paracetamol":
                cart.products.push(paracetamol);
                paracetamol.comparePrices();
                break;
            case "amlodipino":
                cart.products.push(amlodipine);
                amlodipine.comparePrices();
                break;
            case "omeprazol":
                cart.products.push(omeprazole);
                omeprazole.comparePrices();
                break;
            case "amoxicilina":
                cart.products.push(amoxicillin);
                amoxicillin.comparePrices();
                break;
            case "ibuprofeno":
                cart.products.push(ibuprofen);
                ibuprofen.comparePrices();
                break;
            case "carrito":
                if (cart.products.length === 0) {
                    alert("No hay productos en el carrito.");
                } else {
                    showCartDetails();
                }
                break;
            default:
                alert("Error inesperado, por favor recargue la página.");
                break;
        }
        menuOpt = prompt("Desea comparar el precio de algún otro producto? (si/no)").toLowerCase();
        while (menuOpt !== "no" && menuOpt !== "si") {
            menuOpt = prompt("Opción incorrecta, por favor ingrese una opción valida: (si/no)").toLowerCase();
        }
    }
}

if (cart.products.length === 0) {
    alert("No se ha agregado ningún producto al carrito, gracias por usar el comparador de precios de Farmacias Ángeles de la Salud.");
} else {
    showCartDetails();
}

// EOF

// Function definitions
function obtainAvailableMenuOptions(products){
    products.forEach((product, index) => {
        products[index] = product.name;
    });
    products.push("carrito");
    return products;
}

function obtainAvailableProductsList(products){
    let list = "";
    products.forEach(product => {
        list += `   • ${product.name.charAt(0).toUpperCase() + product.name.slice(1)}\n`;
    });
    return list;
}

function obtainCartProductList(){
    let productList = "";
    cart.products.forEach((product, index) => {
        productList += `${index + 1} - ${product.name.charAt(0).toUpperCase() + product.name.slice(1)}: $${product.fasPrice} mxn | $${product.competitionPrice} mxn\n`;
    });
    return productList;
}

function calcCartTotalPrices(){
    let total = [0, 0];

    for (const product of cart.products) {
        total[0] += product.fasPrice;
        total[1] += product.competitionPrice;
    }
    return total;
}

function showCartDetails(){
    let total = calcCartTotalPrices();

    cart.productList = obtainCartProductList();

    cart.fasTotal = total[0];
    cart.competitionTotal = total[1];

    cart.savings = calcSavings(cart.fasTotal, cart.competitionTotal);
    alert(`Producto | Precio FAS | Precio Competencia\n${cart.productList}==========================================\nTotal en Farmacias Ángeles de la Salud: $${cart.fasTotal} mxn\nTotal en la competencia: $${cart.competitionTotal} mxn\nAhorro total en Farmacias Ángeles de la Salud: $${cart.savings} mxn`);
}