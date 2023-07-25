//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function task1(str) {
    let reverseString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString = reverseString+str[i]
    }
    return reverseString;
}

const string = "Hello World"

const result = task1(string);
console.log(result);