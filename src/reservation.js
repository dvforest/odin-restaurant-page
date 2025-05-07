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

    generateDOM() {
        let container = document.createElement("div");
        container.classList.add("reservation");

        this.elements.forEach(item => {
            let element = document.createElement(item.element);
            element.classList.add(item.class);
            element.textContent = item.textContent;
            container.appendChild(element);
        });

        return container;
    }
    
}

export {Reservation};