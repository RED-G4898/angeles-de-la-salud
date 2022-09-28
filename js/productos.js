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

alert("Bienvenido al comparador de precios de Farmacias Ángeles de la Salud");
do {
    if (opt1 == undefined){
        opt1 = prompt("¿Qué producto desea comparar? (Ingrese uno de los siguientes números)\n1 - Paracetamol\n2 - Amlodipino\n3 - Omeprazol\n4 - Amoxicilina");
    }
    switch (opt1) {
        case "1":
            total1+=paracetamol1;
            total2+=paracetamol2;
            mostrarProductos("Paracetamol", paracetamol1, paracetamol2);
            mostrarTotal();
            break;
        case "2":
            total1+=amlodipino1;
            total2+=amlodipino2;
            mostrarProductos("Amlodipino", amlodipino1, amlodipino2);
            mostrarTotal();
            break;
        case "3":
            total1+=omeprazol1;
            total2+=omeprazol2;
            mostrarProductos("Omeprazol", omeprazol1, omeprazol2);
            mostrarTotal();
            break;
        case "4":
            total1+=amoxicilina1;
            total2+=amoxicilina2;
            mostrarProductos("Amoxicilina", amoxicilina1, amoxicilina2);
            mostrarTotal();
            break;
        default:
            alert("Opción inválida");
            break;
    }
    opt2 = prompt("¿Desea comparar otro producto? (si/no)");
    do {
        if (opt2 === "si"){
            opt1 = prompt("¿Qué otro producto desea comparar? (Ingrese uno de los siguientes números)\n1 - Paracetamol\n2 - Amlodipino\n3 - Omeprazol\n4 - Amoxicilina");
        } else if (opt2 != "si" && opt2 != "no"){
            opt2 = prompt("Opción inválida, ¿desea comparar otro producto? (si/no)");
        }
    } while (opt2 != "si" && opt2 != "no");
} while (opt2 != "no");

mostrarTotal();


function mostrarProductos(nombre, precio1, precio2){
    alert("El precio de " + nombre + " en Farmacias Ángeles de la Salud es de: $" + precio1 + " mxn" + "\n" + "El precio de " + nombre + " en la competencia es de: $" + precio2 + " mxn");
}

function mostrarTotal(){
    if (total1 > 0 && total2 > 0){
        alert("Si compra con nosotros usted pagará un total de: $" + total1 + " mxn" + "\n" + "Si compra con la competencia usted pagará un total de: $" + total2 + " mxn" + "\n" + "Usted ahorrará: $" + (total2 - total1) + " mxn");
        if (opt2 === "no"){
            alert("Gracias por utilizar nuestro comparador de precios");
        }
    }
    else {
        alert("No ha seleccionado ningún producto, gracias por usar el comparador de precios de Farmacias Ángeles de la Salud");
    }
}
