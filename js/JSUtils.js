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

function getArrayList (listType, listID = "list", listClass = "list-style", listElementsClass = "list-element", array = [], ...properties){
    let list = "";

    list += `<${listType} id="${listID}" class="${listClass}">`;

    array.forEach(element => {
        list += `<li class="${listElementsClass}">`;
        properties.forEach(property => {
            list += `${element[property]} `;
        });
        list += `</li>`;
    });
    list += `</${listType}>`
    return list;
}

export { addClass, removeClass, toggleClass, hasClass, insertHtml, addHtml, getArrayOfObjectProp, getArrayList };