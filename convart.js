function confeet(inch){
    const feet = inch / 12;
    return feet;
}
const sabbirHeight = confeet(75);
// console.log(sabbirHeight);


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft ' + inchRemaining + 'inch.';
    return result

}
const sabbirHeight2 = inchToFeet2(75);
console.log(sabbirHeight2);