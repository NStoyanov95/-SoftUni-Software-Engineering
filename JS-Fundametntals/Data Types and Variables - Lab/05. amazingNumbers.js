function solve(num) {
    
    let numAsString = num.toString();
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
    }

    result = sum.toString().includes(9);

    result ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`);

}
solve(999);