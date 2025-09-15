function evenSize(str){
    const size = str.length;
    if(size %2===0){
        console.log('even size');
    }
    else{
        console.log('odd size');
    }
}
// evenSize('dhaka')
// evenSize('faka')

function dubleOrTriple(number, doDuble){
    if(doDuble === true){
          const result = number * 2;
          return result;
    }
    else{
          
    }
      
}
// console.log(dubleOrTriple(5, true));
// console.log(dubleOrTriple(5, false));


function numberOfElement(numbers) {
    const len = numbers.length;
    return len;
}
// console.log(numberOfElement([11, 12, 13, 14, 15]));

function getAge(person){
    const age = person.age;
    return age;
}