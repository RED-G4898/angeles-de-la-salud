const addClass = (element, className) => {
    element = document.getElementById(element);
    if (element.classList) {
        element.classList.add(className);
    } else {
        element.className += ' ' + className;
    }
};

const removeClass = (element, className) => {
    element = document.getElementById(element);
    if (element.classList) {
        element.classList.remove(className);
    } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

const toggleClass = (element, className) => {
    element = document.getElementById(element);
    if (element.classList) {
        element.classList.toggle(className);
    } else {
        var classes = element.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        element.className = classes.join(' ');
    }
}

const hasClass = (element, className) => {
    element = document.getElementById(element);
    if (element.classList) {
        return element.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
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