import "./style.css";
import { Home } from "./home.js";
import {Menu} from "./menu.js";
import {Reservation} from "./reservation.js";

// Initialize
const container = document.getElementById("content");
const home = new Home();
const menu = new Menu();
const reservation = new Reservation();

// Functions
function display(page){
    container.innerHTML = "";
    container.innerHTML = page.generateHTML();
}

// Add event listeners
document.getElementById("homeButton").addEventListener("click", () => {
    display(home);
});
document.getElementById("menuButton").addEventListener("click", () => {
    display(menu);
});
document.getElementById("reservationButton").addEventListener("click", () => {
    display(reservation);
});

// Display home page on loading
display(home);



