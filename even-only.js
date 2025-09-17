function evenNumbersOnly(numbers){
    for(const number of numbers){
        if(number %2 === 0){
            console.log(number);
        }
    }
}
const numbers = [12, 45, 56, 67, 77, 65];
evenNumbersOnly(numbers);