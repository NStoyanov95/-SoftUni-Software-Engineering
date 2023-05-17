function solve(first, second, third) {
    
    let sum = first + second + third;
    let result = sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";

    console.log(`${result}`);
}

solve(9, 100, 1.1 )