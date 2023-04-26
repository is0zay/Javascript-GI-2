// very easy: Write a function named min that takes two arguments and returns their minimum.

function min (a, b) {
    if(a < b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Numbers are equal";
    }
}

console.log(min(8, 24)); 


// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let students = [{fName: "John", lName: "Adam", age: 21}, {fName: "Ben", lName: "Franklin", age: 22}, {fName: "George", lName: "Washington", age: 24}];

function greeting(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("My name is " + arr[i].fName + " " + arr[i].lName + " and I'm " + arr[i].age + " years old." );
    }
}

greeting(students);


// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput = Number(prompt("Enter a number 1-12"));

function logMonth(num) {
    switch(num) {
        case 1:
            console.log("January");
            break;
        case 2: 
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Enter a valid number between 1 - 12");
    }
}

logMonth(userInput);