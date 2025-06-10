import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("Tomato");
addItem("Cabbage");
listItems();
removeItem("Tomato");
removeItem("Lettuce");
listItems();
