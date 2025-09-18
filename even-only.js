function evenNumbersOnly(numbers){
    const evens =[];
    for(const number of numbers){
        if(number %2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [12, 45, 56, 67, 77, 65];
const evens = evenNumbersOnly(numbers);
console.log(evens);