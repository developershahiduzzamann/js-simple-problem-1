function sumOfNumber(numbers){
    for(const number of numbers){
        console.log(number);
    }
}
const nums = [12, 33, 45, 55, 5, 67];
const sum = sumOfNumber(nums);
console.log('sum of number is', sum);