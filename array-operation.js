function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [12, 33, 45, 55, 5, 67];
const sum = sumOfNumber(nums);
console.log('sum of number is', sum);