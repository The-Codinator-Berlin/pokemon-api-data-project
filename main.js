const allPokeCards = data.data;

const typeToInclude = "Water"

const filteredCards = allPokeCards.filter(function (card) {
    if (card.types.includes(typeToInclude)) {
        return true;
    } 
    return false;
});

const cardsContainer = document.getElementById("cards-container");

// console.log(cardsContainer); 

for (let i = 0; i < filteredCards.length; i++) {   
    const img = document.createElement("img")   
    img.setAttribute("src", filteredCards[i].images.small); 
    cardsContainer.appendChild(img); 
}



