function solve(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let row = 1;

    while (base > 2) {

        let neededMarble = (base * 4) - 4;
        let neededStone = (base - 2) * (base - 2);

        if (row % 5 === 0) {
            lapis += neededMarble;
        } else {
            marble += neededMarble;
        }

        stone += neededStone;
        row++;
        base -= 2;
    }

    let totalStone = Math.ceil(stone * increment);
    let totalMarble = Math.ceil(marble * increment);
    let totalGold = Math.ceil(base * base * increment);
    let totalLapis = Math.ceil(lapis * increment);
    let height = Math.floor(row * increment);

    console.log(`Stone required: ${totalStone}`);
    console.log(`Marble required: ${totalMarble}`);
    console.log(`Lapis Lazuli required: ${totalLapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${height}`);

}
solve(23, 0.5);

    //    Stone required: 165 
    //    Marble required: 112
    //    Lapis Lazuli required: 8
    //    Gold required: 1
    //    Final pyramid height: 6