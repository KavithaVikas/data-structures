var palindrome = (word)=>{
    var array1  = word.split("");
    var array2 =[];
    var array1Len = array1.length;

    for(var i=0;i<array1Len;i++)
    {
        array2.push(array1.pop());
    }
    console.log(array2.join(""));
    if(word === array2.join("")){
        console.log(`The given word ${word} is a palindrome`);
    }
    else{
        console.log("Not a palindrome");
    }
    
}

palindrome("madamimadam");
