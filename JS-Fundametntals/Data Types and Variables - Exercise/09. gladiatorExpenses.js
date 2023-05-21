function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let sum = 0;
    let shieldBrakeCounter = 0;

    // • Every second lost game, his helmet is broken.
    // • Every third lost game, his sword is broken.
    // • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
    // • Every second time, when his shield brakes, his armor also needs to be repaired.

    for (let i = 1; i <= lostFights; i++) {

        if (i % 6 === 0) {
            sum += shieldPrice + swordPrice + helmetPrice
            shieldBrakeCounter++;
            if (shieldBrakeCounter % 2 === 0) {
                sum += armorPrice;
            }
        } else if (i % 2 === 0) {
            sum += helmetPrice;
        } else if (i % 3 === 0) {
            sum += swordPrice
        }

    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200)