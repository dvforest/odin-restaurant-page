import backgroundImage from "./img/book.jpg";

class Reservation {
    constructor() {
        this.title = "Reservation";
        this.formItem = [
            {title: "First Name",
             element: "input",
             type: "text",
             id: "first-name",
            },
            {title: "Last Name",
            element: "input",
            type: "text",
            id: "last-name",
            },
            {title: "Contact Email",
            element: "input",
            type: "email",
            id: "email",
            },
            {title: "Phone Number",
            element: "input",
            type: "tel",
            id: "phone-number",
            },
            {title: "Want to reserve the cafe for a special event? Tell us your needs and we'll get in touch!",
            element: "textarea",
            id: "message",
            },
        ];

        this.backgroundImage = `url(${backgroundImage})`;
    }

    generateDOM() {
        const container = document.createElement("div");
        container.classList.add("reservation");

        // Create title
        const title = document.createElement("h2");
        title.textContent = this.title;
        title.classList.add("title");
        container.appendChild(title);

        // Create form
        const form = document.createElement("form");
        container.appendChild(form);

        // Create ul
        const ul = document.createElement("ul");
        form.appendChild(ul);

        // Create form items
        this.formItem.forEach((item, index) => {
            // Container
            let li = document.createElement("li");

            // Label
            let label = document.createElement("label");
            label.setAttribute("for", item.id);
            label.classList.add("label");
            li.appendChild(label);

            // Input
            let input = document.createElement(item.element);
            if ("type" in item){
                input.setAttribute("type", item.type);
            }
            input.setAttribute("name", item.id);
            input.setAttribute("id", item.id);
            input.setAttribute("placeholder", item.title);
            li.appendChild(input);

            ul.appendChild(li);
        });

        // Submit button
        const submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.classList.add("submit-button");
        ul.appendChild(submit);

        return container;
    }
    
}

export {Reservation};