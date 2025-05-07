import backgroundImage from "./img/river.jpg";

class Home {
    constructor() {
        this.elements = [
            {class: "subtitle",
             element: "h2",
             textContent: "Welcome to"
            },
            {class: "title",
                element: "h1",
                textContent: "CAFÉ BRUME"
            },
            {class: "title-paragraph",
                element: "p",
                textContent: "Discover our famous artisan coffee brews and curated book collection in a charming setting in the heart of Old Québec."
            },
        ];

        this.backgroundImage = `url(${backgroundImage})`;
    }

    generateDOM() {
        let container = document.createElement("div");
        container.classList.add("home");

        this.elements.forEach(item => {
            let element = document.createElement(item.element);
            element.classList.add(item.class);
            element.textContent = item.textContent;
            container.appendChild(element);
        });

        return container;
    }
    
}

export {Home};