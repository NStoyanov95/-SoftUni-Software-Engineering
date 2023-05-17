function solve(input) {

    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;
    let bitcoins = 0;
    let counter = 0;
    let totalMoney = 0
    let moneyForBitcoins = 0;
    let day = 0;
    let currentDay = 0;

    for (let i = 0; i < input.length; i++) {
        let minedGold = Number(input[i]);
        let moneyFromGOld = 0;
        counter++;

        if (counter % 3 === 0) {
            moneyFromGOld = minedGold * 0.7 * goldPricePerGram;
        } else {
            moneyFromGOld = minedGold * goldPricePerGram;
        }

        totalMoney += moneyFromGOld;

        if (moneyFromGOld >= bitcoinPrice) {
            bitcoins += moneyFromGOld / bitcoinPrice;
            day++;
            if (day == 1) {
                currentDay = counter;
            }
        }
    }

    moneyForBitcoins += Math.floor(bitcoins) * bitcoinPrice;

    console.log(`Bought bitcoins: ${Math.floor(bitcoins)}`);

    if (currentDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${currentDay}`);
    }

    console.log(`Left money: ${(totalMoney - moneyForBitcoins).toFixed(2)} lv.`);
}
solve([1, 1, 1000,0,0,1000]);
// solve([100, 200, 300])