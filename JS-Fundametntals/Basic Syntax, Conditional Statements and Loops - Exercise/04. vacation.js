function solve(group, type, day) {

    let price = 0;
    let totalPrice = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }

            totalPrice = group * price;

            if (group >= 30) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Business":
            if (group >= 100) {
                group = group - 10;
            }
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }

            totalPrice = group * price;
            break;
        case "Regular":
            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }

            totalPrice = group * price;

            if (group >= 10 && group <= 20) {
                totalPrice = totalPrice * 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

} 
solve(30, "Students", "Sunday")