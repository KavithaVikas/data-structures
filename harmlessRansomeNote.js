let harmLessRansomNote = (noteText, magazineText) =>{
let noteArr = noteText.split(" ");
let magzineArr = magazineText.split(" ");
let magazineObj = {};

magzineArr.forEach(element => {
    if(!magazineObj[element]) magazineObj[element]=0;
    magazineObj[element]++;
    
});
console.log(magazineObj);
let noteDeriveStatus = true;

noteArr.forEach(element => {
    if(!magazineObj[element]) noteDeriveStatus=false;
    magazineObj[element]--;
    if(magazineObj[element] < 0) noteDeriveStatus=false
    
})
return noteDeriveStatus;
}

var canWeDerive = harmLessRansomNote('this is a secret note for you from a secret admirer', 
'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

console.log(canWeDerive);