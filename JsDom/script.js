let newElement = document.createElement("h2");
let newElement2 = document.createElement("img");
let newText = document.createTextNode(
  "What! are your serious! You want to join Group"
);
let ExistingElement = document.getElementById("text");

// append text to h2
newElement.appendChild(newText);
// styling css
newElement.style.color = "darkblue";
newElement.style.fontSize = "20px";
newElement.style.marginBottom = "10px";

// append h2 new create tag into html existing dive

// ExistingElement.appendChild(newElement);

ExistingElement.insertBefore(newElement, ExistingElement.childNodes[0]);

// insertBefore method is used to insert element before the give position now it contains two parameters
//  1 is elements which you want to store and 2 is existing element nodes to say the position where the new tag is inserted
