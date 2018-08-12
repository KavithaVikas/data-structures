var recursive = (num) =>{
    if(num === 1) return num;
    else  return num * recursive(num-1)
    
}

var factorial = recursive(2);
console.log(factorial);