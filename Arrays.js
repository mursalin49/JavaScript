/*
//An array is a special variable, which can hold more than one value
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
console.log(typeof cars);
// last elements print
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[4]="pineapple";
console.log(fruits[fruits.length-1]);
*/ /*
// for loop 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for(i=0; i<fruits.length; i++){
    console.log(i);
    console.log(fruits[i]);
}
console.log("Finished"); 
*/

//You can also use the Array.forEach() function
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function myFunction(value){
    console.log(value);
}
fruits.forEach(myFunction);
console.log("Finished");
console.log(fruits.push("lemon"));
//Associative Arrays
const numbers = [1,2,3];
const person ={
    name:"nirob", age:35,
}