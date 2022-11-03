const addClass = (elementID, className) => {
    let element = document.getElementById(elementID);
    element.classList.add(className);
};

const removeClass = (elementID, className) => {
    let element = document.getElementById(elementID);
    element.classList.remove(className);
};


const hasClass = (elementID, className) => {
    let element = document.getElementById(elementID);
    element.classList.contains(className);
}

const toggleClass = (elementID, className) => {
    if (hasClass(elementID, className)) {
        removeClass(elementID, className);
        return;
    }
    addClass(elementID, className);
}

const insertHtml = (element, html) => {
    element = document.getElementById(element);
    element.innerHTML = html;
}

const addHtml = (element, html) => {
    element = document.getElementById(element);
    element.innerHTML += html;
}

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

const toFirstLetterUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export { addClass, removeClass, toggleClass, hasClass, insertHtml, addHtml, getArrayOfObjectProp, getArrayList, toFirstLetterUpperCase };