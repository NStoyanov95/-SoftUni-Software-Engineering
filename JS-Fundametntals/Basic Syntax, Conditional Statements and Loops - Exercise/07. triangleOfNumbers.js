function solve(n) {
    
    for(let i = 1; i <= n; i++){
        let holder = "";

        for(let j = 1; j <= i; j++){
            
            holder += i + " ";
        }
        console.log(holder);
    }
}
solve(5)