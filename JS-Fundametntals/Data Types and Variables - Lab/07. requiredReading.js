function solve(bookPages, pagesReadPerHour, days) {
    
    let timeToReadTheBook = bookPages / pagesReadPerHour;
    let hoursPerDay = timeToReadTheBook / days;

    console.log(hoursPerDay);
}

solve(432,
    15 ,
    4)