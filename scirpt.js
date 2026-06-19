// User Info Analyzer



// let name = "Shaheer"
// let age = "17"

// console.log(typeof age)


// Number To String

// let num = "45"
// let convert = Number(num);

// console.log(convert);


// // if / else → age condition
// let age = 17;

// if(age >= 18){
//     console.log("You Are Superman")
// }else{
//     console.log("You Are Nothing")
// }



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
// let sentence = "My Name Is Shaheer";
// let word = "Name";

// for (let i = 0; i <= sentence.length - word.length; i++) {
    
//     let part = "";

//     for (let j = 0; j < word.length; j++) {
//         part += sentence[i + j];
//     }

//     if (part === word) {
//         console.log("Found");
//     }
// }


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

// let name = "shaheer"
// let vowel = "aeiou"

// let count = 0;


// for(let i = 0; i < name.length; i++){
    
//     if(
//         name[i] === "a" ||
//         name[i] === "e" ||
//         name[i] === "i" ||
//         name[i] === "o" ||
//         name[i] === "u"
//     ){
//      count++;
//     }
// }
// console.log(count);




// 5. Reverse Words + Case Change (strings methods)
// let str = "hello world";
// Task:
// Convert to uppercase
// Then reverse each word




// let str = "Ronaldo Sui"

// str = str.toUpperCase();

// let arr = str.split(" ");


// for(let i= 0; i < arr.length ; i++){
//    let reverse = "";


// for(let j= arr[i].length -1 ; j >=0 ;i-- ){

//     reversed += [i][j];

// }
//    arr[i] = reversed;
// }

// let result = arr.join(" ")
// console.log(result);



// 6. Even Number Filter
// let arr = [11, 22, 33, 44, 55, 66];
// HINTS:
// for loop
// % 2 === 0
// push() new array

// let arr = [11,22, 33, 44, 55, 66];
// let even = []

// for(let i=0; i < arr.length;i++){

//     if(arr[i]%2 === 0){

//         even.push(arr[i]);

//     }
// }

// console.log(even)



// 7. Second Largest
// let arr = [5, 12, 8, 20, 15];
// HINTS:
// for loop
// 2 variables:
// largest
// secondLargest
// comparison >



// let arr = [5 ,12 ,8 ,20 ,15];

// let largest = -Infinity;
//  let secondLargest = -Infinity;


//  for(let i=0 ; i < arr.length;i++){

//     if( arr[i] > largest){

//         secondLargest = largest
//         largest = arr[i]

//     }

//     else if( arr[i] > secondLargest){

//         secondLargest = arr[i]

//     }

//  }
//  console.log(largest);




//  8. Remove Negative Numbers (arrays + condition)
// let arr = [10, -5, 20, -3, 30];
// Task:
// Create new array without negatives



// let arr = [10 , -5 , 20 , -3 , 30];

// let positive = [];

// for(let i = 0; i < arr.length ;i++){

//     if(arr[i] >= 0){

//         positive.push(arr[i]);
//     }
// }
// console.log(positive);




// 9. Number Search (loop + break + condition)
// let arr = [3, 7, 9, 12, 15];
// let target = 9;
// Task:
// Check if target exists
// Use break when found




let arr = [3, 7 , 9, 12 , 15];
let target = 9;


for(let i =0; i < arr.length;i++){

    if(arr[i] === target){

        console.log(arr[i]);
        break;

    }

}








