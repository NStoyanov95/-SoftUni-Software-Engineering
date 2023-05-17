function solve(num) {

    for (let i = 0; i < num; i++) {
        let firstLetter = String.fromCharCode(97 + i);
        for (let j = 0; j < num; j++) {
            let secondLetter = String.fromCharCode(97 + j);
            for (let z = 0; z < num; z++) {
                let thirdLetter = String.fromCharCode(97 + z);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}
solve(3)