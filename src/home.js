import backgroundImage from "./img/river.jpg";

class Home {
    constructor() {
        this.elements = [
            {class: "subtitle",
             element: "div",
             textContent: "Welcome to"
            },
            {class: "title",
                element: "div",
                textContent: "CAFÉ BRUME"
            },
            {class: "title-paragraph",
                element: "p",
                textContent: "Discover our famous artisan coffee brews and curated book collection in a charming setting in the heart of Old Québec."
            },
        ];

        this.backgroundImage = `url(${backgroundImage})`;
    }

    generateHTML() {
        let innerElements = this.elements.map(item =>
            `<${item.element} class="${item.class}">${item.textContent}</${item.element}>`
        ).join("");
        let wrappedElements = `<div class="home">${innerElements}</div>`
        return wrappedElements;
    }
    
}

export {Home};