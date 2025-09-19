function evenNumbersOnly(numbers){
    const evens =[];
    for(const number of numbers){
        if(number %2 === 0){
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [12, 45, 56, 67, 77, 65];
const evens = evenNumbersOnly(numbers);
console.log('even number are',evens);


function sumOfevenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number %2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfevenNumbers(numbers);
console.log('sum of even numbers',sum);
