/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 */

// FAS Stand for Farmacias Ángeles de la Salud.

// Constant declaration and initialization

// Arrow function to calc the total price of both shopping options:

// Variables declaration and initialization

// Control variables
let fasTotal = 0;
let competitionTotal = 0;
let productsOpt;
let menuOpt;

class Product{
    constructor(name, fasPrice, competitionPrice){
        this.name = name;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
    }

    // Method to show the product price in both pharmacies
    showPrices(){
        alert(`Si usted compra "${this.name}" en Farmacias Ángeles de la Salud pagará $${this.fasPrice}.\nSi usted compra en otras farmacias pagaría $${this.competitionPrice}."`);
    }
}

class Cart{
    constructor(){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    cartTotalPrice(){
        this.products.forEach(product => {
            this.fasTotalPrice += product.fasPrice;
            this.competitionTotalPrice += product.competitionPrice;
        });
    }

    showCart(){
        let cartString;
        this.products.forEach((product, index) => {
            cartString += `${index}: ${product.name} \t $${product.fasPrice} \t $${product.competitionPrice}`;
        });

        this.cartTotalPrice();

        alert("Producto\tPrecio FAS\tPrecio Competencia\n" + cartString + "\n\nTotal FAS: $" + fasTotalPrice + "\nTotal Competencia: $" + competitionTotalPrice);
    }
}


// Main code

const paracetamol = new Product("Paracetamol", 20, 30);
const amlodipine = new Product("Amlodipino", 50, 60);
const omeprazole = new Product("Omeprazol", 100, 120);
const amoxicillin = new Product("Amoxicilina", 80, 100);

const cart = new Cart();


alert("Bienvenido al comparador de precios de Farmacias Ángeles de la Salud"); // Welcome message

menuOpt = prompt("Desea comparar el precio de algún producto? (si/no)"); // First validation to known if the user want to make a comparison

printMenuOptErrorMsg("algún"); // In case of error, the program will show an error message to introduce a valid option

// If the user wants the comparison, the program will ask for the products to compare
while (menuOpt != "no" && menuOpt != null) {
    printProductMenu("", productsOpt == undefined); // First message to ask the user for the product to compare by printing the products menu

    // Control structure to validate the product to compare
    switch (productsOpt) {
        case "1":
            cart.addProduct(paracetamol);
            paracetamol.showPrices();
            break;
        case "2":
            cart.addProduct(amlodipine);
            amlodipine.showPrices();
            break;
        case "3":
            cart.addProduct(omeprazole);
            omeprazole.showPrices();
            break;
        case "4":
            cart.addProduct(amoxicillin);
            amoxicillin.showPrices();
            break;
        default:
            alert("Opción inválida");
            break;
    }

    menuOpt = prompt("¿Desea comparar el precio de otro producto? (si/no)"); // Message to ask the user if he wants to compare another product

    printMenuOptErrorMsg("otro"); // In case of error, the program will show an error message to introduce a valid option

    printProductMenu("otro ", menuOpt === "si"); // If the user wants to compare another product, the program will ask for the product to compare by printing the correspondent menu form
}

// Validation to show the proper message to the user, depending on the usage of the comparison process and the selected products
if (fasTotal <= 0 && competitionTotal <= 0 && productsOpt != undefined){
    cart.showCart();
}else if (productsOpt == undefined || (fasTotal > 0 && competitionTotal > 0)){
    alert("Gracias por usar el comparador de precios de Farmacias Ángeles de la Salud");
}

// EOF

// Function definitions

// Function to print a comparison message with the prices of the product selected by the user:
function showProducts(name, price1, price2){
    alert("El precio de " + name + " en Farmacias Ángeles de la Salud es de: $" + price1 + " mxn" + "\n" + "El precio de " + name + " en la competencia es de: $" + price2 + " mxn");
}

// Function to print the total price of each shopping option:
function showTotalPrice(){
    if (fasTotal > 0 && competitionTotal > 0){
        alert("Si compra con nosotros usted pagará un total de: $" + fasTotal + " mxn" + "\n" + "Si compra con la competencia usted pagará un total de: $" + competitionTotal + " mxn" + "\n" + "Usted ahorrará: $" + (competitionTotal - fasTotal) + " mxn");
    }
    else {
        alert("No ha seleccionado ningún producto, gracias por usar el comparador de precios de Farmacias Ángeles de la Salud");
    }
}

// Function to print an error message and ask the user for a valid option until he introduces it:
function printMenuOptErrorMsg(errorString){
    while (menuOpt != "si" && menuOpt != "no") {
        menuOpt = prompt("Opción inválida, ¿desea comparar el precio de " + errorString + " producto? (si/no)");
    }
}

// Function to print the products menu and ask the user for the product to compare:
function printProductMenu(menuString, expression){
    if (expression){
        productsOpt = prompt("¿Qué " + menuString + "producto desea comparar? (Ingrese uno de los siguientes números)\n1 - Paracetamol\n2 - Amlodipino\n3 - Omeprazol\n4 - Amoxicilina");
    }
}