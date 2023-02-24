console.log(data);

// Pokemon card images obtained with for loop 
const cardsContainer = document.getElementById("cards-container")
console.log(cardsContainer);
for (let i = 0; i < data.data.length; i++) {
    const img = document.createElement("img")
    img.setAttribute("src", data.data[i].images.small);
    cardsContainer.appendChild(img);
}

