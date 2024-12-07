const menu = document.getElementById("text");

const newList = document.createElement("ul");
const newListItem = document.createElement("li");
const newListItem_2 = document.createElement("li");
const newListItem_3 = document.createElement("li");
const newListItem_4 = document.createElement("li");
const newListItem_5 = document.createElement("li");

newList.innerHTML = "I nostri piatti";
newListItem.innerHTML = "Arancine";
newListItem_2.innerHTML = "Busiate al pesto trapanese";
newListItem_3.innerHTML = "Cous cous alla trapanese";
newListItem_4.innerHTML = "Cannolo di Dattilo";
newListItem_5.innerHTML = "Gambero rosso di Mazara del Vallo (Adesso disponibile!)";

menu.appendChild(newList);
newList.appendChild(newListItem);
newList.appendChild(newListItem_2);
newList.appendChild(newListItem_3);
newList.appendChild(newListItem_4);
newList.appendChild(newListItem_5)