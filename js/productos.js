/*
 * The following code is a preliminary version of a shopping price comparator algorithm,
 * It is intended to show to users the price of several products in Farmacias Ángeles de la Salud
 * and the competition, and also to show the total price of the products selected by the user and the
 * its savings if it chooses to buy in our pharmacy.
 *
 * The whole code has been written and developed by RED with <3 for Farmacias Ángeles de la Salud as
 * part of a project from a Coderhouse course.
 */

const getArrayElementsNames = array => array.map(element => element.name);
const isAvailableElement = (element, array) => array.includes(element);
const calcSavings = (total1, total2) => total2 - total1;

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

const stock = {
    availableProducts: [],
}

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

do {
    menuOpt = prompt("Ingrese \"comparar\" para ver la lista de productos, \"carrito\" para ver los productos seleccionados o \"salir\" para cerrar el comparador de precios.");
    switch (menuOpt){
        case "comparar":
            do {
                menuOpt = prompt("Ingrese el nombre del producto que desea comparar o \"regresar\" para volver al menú anterior\n" + availableProductsList);
                if (isAvailableElement(menuOpt, availableProductsNames)){
                    cart.products.push(stock.availableProducts[availableProductsNames.indexOf(menuOpt)]);
                    cartProductsNames = getArrayElementsNames(cart.products);
                    cart.products[cartProductsNames.indexOf(menuOpt)].comparePrices();
                } else if (menuOpt != "regresar"){
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

function calcCartTotalPrices(){
    let total = [0, 0];

    for (const product of cart.products) {
        total[0] += product.fasPrice;
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