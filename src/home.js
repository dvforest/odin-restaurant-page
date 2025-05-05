class Home {
    constructor() {
        this.elements = [
            {class: "subtitle",
             element: "div",
             textContent: "Welcome to"
            },
            {class: "title",
                element: "div",
                textContent: "Cuddington Cafe"
            },
            {class: "title-paragraph",
                element: "p",
                textContent: "We hope you like it here!"
            },
        ]
    }

    generateHTML() {
        return this.elements.map(item =>
            `<${item.element} class="${item.class}">${item.textContent}</${item.element}>`
        ).join("");
    }
    
}

export {Home};