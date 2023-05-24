function solve(startingYield) {
    
    let spicesPerDay = 0;
    let days = 0;

    while (startingYield >= 100) {
        
        days++;
        spicesPerDay += startingYield - 26;
        startingYield -= 10;
        
        if (startingYield < 100) {
            spicesPerDay -= 26;
            break;
        }

    }

    console.log(days);
    console.log(spicesPerDay);
}

solve(450);