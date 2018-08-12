var fizzBuzz = (num) => {

    for(var i=1;i<=num;i++){

        if (i % 15 === 0) console.log(`${i} - fizzBuzz`);
        else if (i % 3 === 0) console.log(`${i} - fizz`);
        else if (i % 5 === 0)  console.log(`${i} - buzz`);
    }
}

fizzBuzz(15);