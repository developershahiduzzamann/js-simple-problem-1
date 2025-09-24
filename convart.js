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
// console.log(sabbirHeight2);


function mileToKolometer(mile){
    const kilo = mile * 1.60934;
    return kilo
}
const kilome = mileToKolometer(45);
// console.log(kilome);


function kilomiterTOMile(kilo){
    const mile = kilo * 0.621371;
    return mile
}
const ml = kilomiterTOMile(45);
// console.log(ml);