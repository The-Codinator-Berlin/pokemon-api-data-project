const allPokeCards = data.data;
// console.log(allPokeCards.length);
const typeButtons = document.getElementsByName("myRadioField");
const cardsContainer = document.getElementById("cards-container");
const typeSelectionArea = document.getElementById("radio-container");

// listen for user changes to radio buttons (card type)
typeSelectionArea.addEventListener("input", updateCardList);

// update list when loading page
updateCardList();

function updateCardList() {
    // Loop is assigning button checked to variable selectedType
    let selectedType;
    for (let i = 0; i < typeButtons.length; i++) {
        if (typeButtons[i].checked === true) {
            selectedType = typeButtons[i].value;
        }
    }

    // console.log(selectedType);
    // Filter cards based on value selected
    const filteredCards = allPokeCards.filter(function (card) {
        return card.types.includes(selectedType);
    });

    // Looping through all cards and pulling each small img link, creating an img element and assigning the link to each tag
    const newImages = [];
    for (let i = 0; i < filteredCards.length; i++) {
        const imageLink = filteredCards[i].images.small;
        const image = document.createElement("img");
        image.setAttribute("src", imageLink);
        newImages.push(image);
    }
    // cards-container (index.html) is updated with new images
    cardsContainer.replaceChildren(...newImages);
}




