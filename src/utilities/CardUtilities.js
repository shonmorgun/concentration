export const areMatchingCardNumbers = (firstCode, secondCode) => {
    const firstNumber = extractCardNumberFromCode(firstCode);
    const secondNumber = extractCardNumberFromCode(secondCode);
    return firstNumber === secondNumber;
}

export const removePairOfCardsFromDeck = (deckOfCards, cardOne, cardTwo) => {
    for (var i = 0; i < deckOfCards.length; ++i) {
        if (deckOfCards[i]["code"] === cardOne || deckOfCards[i]["code"] === cardTwo) {
            deckOfCards[i]["removed"] = true;
        }
    }
    return deckOfCards;
}

const extractCardNumberFromCode = cardCode => {
    return cardCode.substr(0, cardCode.length - 1);
}

