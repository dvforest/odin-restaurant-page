import backgroundImage from "./img/book.jpg";

class Reservation {
    constructor() {
        this.elements = [
            {class: "title",
             element: "div",
             textContent: "Reserve now!"
            },
            {class: "reserveButton",
                element: "button",
                textContent: "Reserve"
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

export {Reservation};