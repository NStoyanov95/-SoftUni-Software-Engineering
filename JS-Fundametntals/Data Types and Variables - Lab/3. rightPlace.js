function solve(str, char, result) {

    let replace = str.replace("_", char)

    let output = replace === result ? "Matched" : "Not Matched";

    console.log(output);
}

solve('Str_ng', 'i', 'String')