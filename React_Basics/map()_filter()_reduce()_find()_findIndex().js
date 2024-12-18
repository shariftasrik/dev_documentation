//1. Map -Create a new array by doing something with each item in an array.
var numbers = [3, 56, 2, 48, 5];
const new_Numbers_Map = numbers.map(function double(x){
    return x*2;
});
console.log("Using Map : " + new_Numbers_Map);





//2. Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];
const new_Numbers_Filter = numbers.filter(function(num){
        return num > 10;
});

console.log("Using Filter : " + new_Numbers_Filter);





//3. Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];
const new_Numbers_Reduce = numbers.reduce(function(accumulator, currentNumber){
    return accumulator + currentNumber;
});
console.log("Using Reduce : " + new_Numbers_Reduce);





//4. Find - find the first item that matches from an array.
var numbers = [3, 56, 2, 48, 5];
const firstNumber = numbers.find(function(num){
    return num > 10;
});
console.log("Find the first value that is greater than 10 : " + firstNumber);





//5. FindIndex - find the index of the first item that matches.
var numbers = [3, 56, 2, 48, 5];
const AgainFirstNumber = numbers.findIndex(function(num){
    return num > 10;
});
console.log("Find the first index of the value which is greater than 10 : " +AgainFirstNumber);
