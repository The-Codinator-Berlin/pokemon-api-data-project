console.log(data);

    // Pokemon card images obtained with for loop 
    //Created a variable for the cards container
const cardsContainer = document.getElementById("cards-container") 
    // logged cardsContainer to console
console.log(cardsContainer); 
    //This searches through all the length of the data
for (let i = 0; i < data.data.length; i++) {   
    // This creates an img element for every card
    const img = document.createElement("img")   
    // This specifies where the image is obtained from 
    img.setAttribute("src", data.data[i].images.small); 
    // This appends or puts the info into the page
    cardsContainer.appendChild(img); 
}

console.log(typesOfPokemon);
