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


