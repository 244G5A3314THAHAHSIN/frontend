function fare(km) {
    let fare = 0;

    if (km <= 5) {
        fare = 10;
    } else if (km <= 15) {
        fare = 10 + 15;
    } else {
        fare = 10 + 15 + 20;
    }

    return fare;
}
let distance = 19.5;
let totalFare = fare(distance);
console.log(`Total fare for ${distance} km is ₹${totalFare}`);
