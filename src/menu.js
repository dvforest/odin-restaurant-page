import backgroundImage from "./img/croissants.jpg";

class Menu {
    constructor() {
        this.title = "Menu";
        this.foodItem = [
            {title: "Almond Croissant",
             price: "$7.95",
             description: "A buttery almond croissant, handbaked with love."
            },
            {title: "Macademia Brownie",
             price: "$6.95",
             description: "A rich, chocolate brownie with macademia nuts."
            },
            {title: "Pecan Muffin",
                price: "$7.95",
                description: "Moist cinnamon pecan muffins topped with a crumbly streusel."
            },
            {title: "Keylime Pie",
                price: "$8.95",
                description: "With fresh lemon curd, topped with italian meringue."
            },
        ];

        this.backgroundImage = `url(${backgroundImage})`;
    }

    generateDOM() {
        let container = document.createElement("div");
        container.classList.add("menu");

        // Create title
        let title = document.createElement("h2");
        title.textContent = this.title;
        title.classList.add("title");
        container.appendChild(title);

        // Create food column
        let foodColumn = document.createElement("div");
        foodColumn.classList.add("food-column");
        container.appendChild(foodColumn);

        // Create menu items
        this.foodItem.forEach(item => {
            let foodWrapper = document.createElement("div");
            foodWrapper.classList.add("food-wrapper");

            // Food Header
            let foodHeader = document.createElement("div");
            foodHeader.classList.add("food-header");
            foodWrapper.appendChild(foodHeader);
            
            // Food Title
            let foodTitle = document.createElement("div");
            foodTitle.classList.add("food-title");
            foodTitle.textContent = item.title;
            foodHeader.appendChild(foodTitle);
            
            // Food Price
            let foodPrice = document.createElement("div");
            foodPrice.classList.add("food-price");
            foodPrice.textContent = item.price;
            foodHeader.appendChild(foodPrice);

            // Food Description
            let foodDescription = document.createElement("div");
            foodDescription.classList.add("food-description");
            foodDescription.textContent = item.description;
            foodWrapper.appendChild(foodDescription);

            foodColumn.appendChild(foodWrapper);
        });

        return container;
    }
    
}

export {Menu};