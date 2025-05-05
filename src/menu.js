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
        ]
    }

    generateHTML() {
        return this.elements.map(item =>
            `<${item.element} class="${item.class}">${item.textContent}</${item.element}>`
        ).join("");
    }
    
}

export {Menu};