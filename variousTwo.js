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
        const result = number * 3;
        return result
    }
      
}
console.log(dubleOrTriple(5, true));
console.log(dubleOrTriple(5, false));