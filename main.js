const allPokeCards = data.data;

const typeButtons = document.getElementsByName("myRadioField");
const cardsContainer = document.getElementById("cards-container");
const typeSelectionArea = document.getElementById("radio-container");

// listen for user changes to radio buttons (card type)
typeSelectionArea.addEventListener("input", updateCardList);

// update list when loading page
updateCardList();

function updateCardList() {
    // get user-selected card type
    let selectedType;
    for (let i = 0; i < typeButtons.length; i++) {
        if (typeButtons[i].checked) {
            selectedType = typeButtons[i].value;
        }
    }

    // filter the cards based selected type
    const typeToInclude = selectedType || "Colorless";
    const filteredCards = allPokeCards.filter(function (card) {
        if (card.types.includes(typeToInclude)) {
            return true;
        }
        return false;
    });

    // add images for filtered cards
    const newImages = [];
    for (let i = 0; i < filteredCards.length; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", filteredCards[i].images.small);
        newImages.push(img);
    }
    cardsContainer.replaceChildren(...newImages);
}




