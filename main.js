function fetchData() {
  fetch("https://api.pokemontcg.io/v2/cards")
  .then((response) => { return response.json()})
  .then((pokeResult) => {
    console.log("pokeResult", pokeResult);
    updateCardList(pokeResult.data);
    addEvents(pokeResult.data)
  })
  .catch(err => {
    console.log(err);
  });
}
fetchData()

// listen for user changes to radio buttons (card type)
function addEvents(allPokeCards) {
  const typeSelectionArea = document.getElementById("radio-container");
  typeSelectionArea.addEventListener("input", function () {
  updateCardList(allPokeCards)
});
}

// update list when loading page
function updateCardList(allPokeCards) {
  const typeButtons = document.getElementsByName("myRadioField");
    // Loop is assigning button checked to variable selectedType
    let selectedType;
    for (let i = 0; i < typeButtons.length; i++) {
        if (typeButtons[i].checked === true) {
            selectedType = typeButtons[i].value;
        }
    }

  
    // Filter cards based on value selected
    const filteredCards = allPokeCards.filter(function (card) {
        return card.types.includes(selectedType);
    });
console.log('filteredCards :>> ', filteredCards);
    // Looping through all cards and pulling each small img link, creating an img element and assigning the link to each tag
    const newImages = [];
    for (let i = 0; i < filteredCards.length; i++) {
        const imageLink = filteredCards[i].images.small;
        const image = document.createElement("img");
        image.setAttribute("src", imageLink);
        newImages.push(image);
    }
    // cards-container (index.html) is updated with new images
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.replaceChildren(...newImages);
}

//////////////////Info page/////////////Below///////////////////////
// Show more/ less text button function 

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



