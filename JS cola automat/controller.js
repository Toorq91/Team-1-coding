function buyCoke() {
    let valueInserted = valueFromCoinCounts(coinsInserted);
    if (valueInserted < 25) {
        errorMessage = 'Ikke nok penger';
        updateView();
        return;
    }
    let valueToReturn = valueInserted - 25;
    if (!giveChangeAndReturnIsSuccess(false, valueToReturn)) {
        errorMessage = 'Automaten har ikke returmynter';
        updateView();
        return;
    }
    errorMessage = '';
    giveChangeAndReturnIsSuccess(true, valueToReturn);
    for (let i = 0; i < coinsInserted.length; i++) {
        coinsInMachine[i] += coinsInserted[i];
        coinsInserted[i] = 0;
    }
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}
/*
Forenklet versjon: 

function buyCoke() {
    let valueInserted = valueFromCoinCounts(coinsInserted);
    if (valueInserted < 25) {
        errorMessage = 'Ikke nok penger';
        updateView();
        return;
    }
    errorMessage = '';
    for (let i = 0; i < coinsInserted.length; i++) {
        coinsInMachine[i] += coinsInserted[i];
        coinsInserted[i] = 0;
    }
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}
*/

function giveChangeAndReturnIsSuccess(actuallyDoIt, amount) {
    for (let i = coinsInMachine.length - 1; i >= 0; i--) {
        let coinValue = coinValueFromIndex(i);
        let coinCountNeeded = Math.floor(amount / coinValue);
        let coinCountInMachine = coinsInMachine[i];
        let coinCount = Math.min(coinCountInMachine, coinCountNeeded);
        // let coinCount = coinCountInMachine < coinCountNeeded 
        //     ? coinCountInMachine : coinCountNeeded;
        amount -= coinValue * coinCount;
        if (actuallyDoIt) {
            coinsReturned[i] += coinCount;
            coinsInMachine[i] -= coinCount;
        }
    }
    return amount == 0;
}

function insertCoin(value) {
    let index = coinIndexFromValue(value);
    // alt 2
    // if (value == 1) index = 0;
    // else if (value == 5) index = 1;
    // else if (value == 10) index = 2;
    // else if (value == 20) index = 3;

    // alt 3
    // const index =
    //     value == 1 ? 0 :
    //     value == 5 ? 1 :
    //     value == 10 ? 2 :
    //     value == 20 ? 3 :
    //     null;
    coinsInserted[index]++;
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}