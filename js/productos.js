// Variables

// Productos
const paracetamol1 = 12;
const paracetamol2 = 30;
const amlodipino1 = 30;
const amlodipino2 = 45;
const omeprazol1 = 105;
const omeprazol2 = 158;
const amoxicilina1 = 39;
const amoxicilina2 = 45;

// Otros
let total1 = 0;
let total2 = 0;
let opt1;
let opt2;

console.log("Bienvenido al comparador de precios de Farmacias Ángeles de la Salud");
console.log("¿Qué producto desea comprar? (Ingrese uno de los siguientes números)");

do {
    opt1 = prompt("1 - Paracetamol\n2 - Amlodipino\n3 - Omeprazol\n4 - Amoxicilina");
    switch (opt1) {
        case 1:
            total1+=paracetamol1;
            total2+=paracetamol2;
            break;
        case 2:
            total1+=amlodipino1;
            total2+=amlodipino2;
            break;
        case 3:
            total1+=omeprazol1;
            total2+=omeprazol2;
            break;
        case 4:
            total1+=amoxicilina1;
            total2+=amoxicilina2;
            break;
        default:
            opt2 = "error";
            break;
    }
    opt2 = prompt("¿Desea agregar otro producto? (si/no)");
    do {
        if (opt2 == "si"){
        console.log("¿Qué otro producto desea comparar? (Ingrese uno de los siguientes números)");
        } else if (opt2 == "no"){
            console.log("Si compra con nosotros usted pagará un total de: $" + total1 + " mxn");
            console.log("Si compra con la competencia usted pagará un total de: $" + total2 + " mxn");
        } else if (opt2 == "error"){
            console.log("Error: Ingrese un producto valido.");
        } else {
            opt2 = prompt("Error: Ingrese una opción válida (si/no): ");
        }
    } while (opt2 != "si" && opt2 != "no");
} while (opt2 != "no");