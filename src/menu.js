import backgroundImage from "./img/croissants.jpg";

class Menu {
    constructor() {
        this.elements = [
            {class: "menuItem",
             element: "div",
             textContent: "Coffee"
            },
            {class: "menuItem",
                element: "div",
                textContent: "Croissant"
               },
        ];

        this.backgroundImage = `url(${backgroundImage})`;
    }

    generateHTML() {
        return this.elements.map(item =>
            `<${item.element} class="${item.class}">${item.textContent}</${item.element}>`
        ).join("");
    }
    
}

export {Menu};