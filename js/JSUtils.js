/*
 *
 * This script was made by RED with ❤ for Angeles de la Salud
 * as a project of JavaScript course by CoderHouse
 *
 * The script serve to supply general porpuses functions.
 *
 * Last update:
 *
 */

const toFirstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const getArrayOfObjectProp = (array, property) => array.map(element => element[property]);

function insertListElement (array, listElementsClass, delBtn, list, ...properties) {
    let tempList = list;
    array.forEach((element, index) => {
        tempList += `<li class="${listElementsClass}" index="${index}">`;
        properties.forEach(property => {
            tempList += `${element[property]} `;
        });
        delBtn ? tempList += `<div class="cart-list__del-btn"><i class="bi bi-x"></i></div></li>` : `</li>`;
    });
    return tempList;
}

function getArrayList (listType, listID = "list", listClass = "list-style", listElementsClass = "list-element", array = [], delBtn, ...properties){
    let list = "";

    if(array.length < 1) {
        list = `<p id="${listID}" class="${listClass} list-empty">No hay productos en el carrito</p>`;
        return list;
    }
    list += `<${listType} id="${listID}" class="${listClass}">`;
    list += insertListElement(array, listElementsClass, delBtn, list, ...properties);
    list += `</${listType}>`;
    return list;
}

export { getArrayOfObjectProp, getArrayList, toFirstLetterUpperCase };