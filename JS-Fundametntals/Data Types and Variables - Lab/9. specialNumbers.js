function solve(num) {
    
    let sum = 0;
    let result = 0;

    for(let i = 1; i <= num; i++){
        let numAsString = i.toString();
        for(let j = 0; j < numAsString.length; j++){
            sum += Number(numAsString[j]);
        }
        result = sum === 5 || sum === 7 || sum === 11;

        if (result) {
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
        
        sum = 0;
    }
}
solve(15)