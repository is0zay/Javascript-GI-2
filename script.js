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