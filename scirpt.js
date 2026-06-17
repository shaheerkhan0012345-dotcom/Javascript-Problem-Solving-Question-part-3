// User Info Analyzer



// let name = "Shaheer"
// let age = "17"

// console.log(typeof age)


// Number To String

let num = "45"
let convert = Number(num);

console.log(convert);


// if / else → age condition
let age = 17;

if(age >= 18){
    console.log("You Are Superman")
}else{
    console.log("You Are Nothing")
}



// Temperature Checker

// let temp = 35;

// let result = "Hot";"Cold"


// temp > 30 ? "Hot" : "Cold"


// console.log(result);


// Word Finder


// Way 1
// let sentence = "My Name Is Shaheer";

// let word = "Name"

// let output = sentence.includes(word);

// console.log(output)


// Way 2
let sentence = "My Name Is Shaheer";
let word = "Name";

for (let i = 0; i <= sentence.length - word.length; i++) {
    
    let part = "";

    for (let j = 0; j < word.length; j++) {
        part += sentence[i + j];
    }

    if (part === word) {
        console.log("Found");
    }
}


//Vowel Counter


// wWay 1
// let str = "education"
// let vowels = "aeiou"
// let count =0;

// for(let i = 0; i < str.length; i++){
    
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }


// console.log(count);


//Way2

let name = "shaheer"
let vowel = "aeiou"

let count = 0;


for(let i = 0; i < name.length; i++){
    
    if(
        name[i] === "a" ||
        name[i] === "e" ||
        name[i] === "i" ||
        name[i] === "o" ||
        name[i] === "u"
    ){
     count++;
    }
}
console.log(count);




// 5. Reverse Words + Case Change (strings methods)
// let str = "hello world";
// Task:
// Convert to uppercase
// Then reverse each word




let str = "Ronaldo Sui"

str = str.toUpperCase();

let arr = str.split(" ");


for(let i= 0; i < arr.length ; i++){
   let reverse = "";


for(let j= arr[i].length -1 ; j >=0 ;i-- ){

    reversed += [i][j];

}
   arr[i] = reversed;
}

let result = arr.join(" ")
console.log(result);







