let distance = 19.5; // total distance traveled
let price = 0;

// Use a for loop to cover each km

if (distance <= 5) {
    price = 10;
} else if (distance <= 15) {
    price = 10 + 15; // first 5 km (₹10) + next kms (₹15)
} else {
    price = 10 + 15 + 20; // first 5 km + next 10 km + beyond
}
// print 5 table using while loop

let i1=1;
let b=5;
while(i1<=10){
    console.log(b + "x" + i1 + "="+b*i1)
    i1++;
}
// do while loop
let l=1;
let n=5;
do{
    console.log(n + "x" + l + "="+n*l)
    l++
}
while(l<=10);
