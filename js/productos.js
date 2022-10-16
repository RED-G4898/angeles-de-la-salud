/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 */

// Definition of arrow functions
const getArrayElementsNames = array => array.map(element => element.name); // Obtain the names of an object array with names usign the map method
const isAvailableElement = (element, array) => array.includes(element); // Check if the specified element is in the specified array
const calcSavings = (total1, total2) => total2 - total1; // Calc the savings by resting two totals

class Product{ // Definiction of Product class
    constructor(name, fasPrice, competitionPrice){
        this.name = name;
        this.fasPrice = fasPrice;
        this.competitionPrice = competitionPrice;
    }
    comparePrices(){
        alert(`El precio de "${this.name.charAt(0).toUpperCase() + this.name.slice(1)}" en Farmacias Ángeles de la Salud es de $${this.fasPrice}.\nEn la competencia el precio es de $${this.competitionPrice}.\n\nSi compra en Farmacias Ángeles de la Salud usted ahorra $${calcSavings(this.fasPrice,this.competitionPrice)}.`);
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

// Instantiation of products
const paracetamol = new Product("paracetamol", 50, 60);
const amlodipine = new Product("amlodipino", 100, 120);
const omeprazole = new Product("omeprazol", 150, 180);
const amoxicillin = new Product("amoxicilina", 200, 240);
const ibuprofen = new Product("ibuprofeno", 250, 300);

stock.availableProducts.push(paracetamol, amlodipine, omeprazole, amoxicillin, ibuprofen); // Add products to the stock

const availableProductsList = getElementList(stock.availableProducts, "-", false); // Get a list of available products to let the user know what products are available.

const availableProductsNames = getArrayElementsNames(stock.availableProducts); // Get a string array with available product names to let the program knnow wich products are available and how to add them to the cart.

let cartProductsNames; // Stores an array with names of products selected by the user to let the program show data related to those products.

let menuOpt; // Control variable to store the user's choice in the main menu.

// Main code
do {
    menuOpt = prompt("Ingrese \"comparar\" para ver la lista de productos, \"carrito\" para ver los productos seleccionados o \"salir\" para cerrar el comparador de precios.").toLowerCase(); // Ask the user what he wants to do
    switch (menuOpt){
        case "comparar": // If the user wants to compare prices
            do {
                menuOpt = prompt("Ingrese el nombre del producto que desea comparar o \"regresar\" para volver al menú anterior\n" + availableProductsList).toLowerCase(); // Ask the user what product he wants to compare
                if (isAvailableElement(menuOpt, availableProductsNames)){
                    cart.products.push(stock.availableProducts[availableProductsNames.indexOf(menuOpt)]); // If the product is available add the product to the cart using the product names and available products arrays.
                    cartProductsNames = getArrayElementsNames(cart.products); // Obtain the names of products in the cart to let the program know what products are in the cart.
                    cart.products[cartProductsNames.indexOf(menuOpt)].comparePrices(); // Show the price comparison using the product names and cart products arrays.
                } else if (menuOpt != "regresar"){
                    alert("El producto ingresado no se encuentra en el inventario o se ingreso un dato incorrecto."); // If the product is not available and no valid option was selected, show an error message.
                }
            } while (isAvailableElement(menuOpt, availableProductsNames) || menuOpt !== "regresar"); // Repeat the process until the user writes "regresar"
            break;
        case "carrito": // If the user wants to see the products in the cart
            if (cart.products.length > 0){ // Check if the cart is empty
                showCartDetails(); // If the cart is not empty show the cart details
            } else {
                alert("No hay productos en el carrito."); // If the cart is empty show a warning message
            }
            break;
        case "salir": // If the user wants to exit the program
            alert("Gracias por usar el comparador de precios de Farmacias Ángeles de la Salud."); // Show a goodbye message
            break;
        default:
            alert("Opción inválida."); // If the user enters an invalid option show an error message
            break;
    }
}while (menuOpt !== "salir"); // Repeat the process until the user writes "salir"
// EOF

function calcCartTotalPrices(){ // Calc the total price of the products in the cart
    let total = [0, 0]; // Both totals are stored in an array

    for (const product of cart.products) {
        total[0] += product.fasPrice;
        total[1] += product.competitionPrice;
    }
    return total;
}

function getElementList(array, listBullet, includePrice){ // Get a list of elements in an array
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

function showCartDetails(){ // Show the details of the products in the cart
    let total = calcCartTotalPrices(); // Calc the total prices of the products in the cart
    cart.fasTotal = total[0];
    cart.competitionTotal = total[1];
    cart.productList = getElementList(cart.products, "•", true); // Get a list of products in the cart
    cart.savings = calcSavings(cart.fasTotal, cart.competitionTotal); // Calc the savings of the products in the cart

    alert(`Producto     Precio FAS    Precio Competencia\n${cart.productList}\nEl total a pagar en Farmacias Ángeles de la Salud es de $${cart.fasTotal}.\nEl total a pagar en la competencia es de $${cart.competitionTotal}.\n\nSi compra en Farmacias Ángeles de la Salud usted ahorra $${cart.savings}.`);
}