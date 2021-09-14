var a = 10;
var b = 20;

console.log(a + b);

/**
 * variable of types
 */

//Number

let age = 29;

console.log(age);

//string

let defaultString = 'My name is Ashraf Uddin';

console.log(defaultString);

//boolean

let booleanName = true;


if (booleanName) {
    console.log('Value Is true');

} else {
    console.log('Value is false');
}

/**
 * var and let and Const value different 
 * var and let is deffernt is being var duplicate or same value working but 
 * duplicate or same value not working.this const value is being value not change
 */

var a = 10;
var a = 10;

console.log(a + a);

let c = 10;
let m = 10;

console.log(c + m);

const name1 = 'ashraf Uddin';
const age1 = 20;

console.log(`My name is ${name1} and My Age is ${age1}`);

//array

let arrayName = ['ashraf', 'tanjil', 'tamim'];

// console.log(arrayName[0]);

// for(let i = 0; i < arrayName.length; i++){
// 	console.log(arrayName[i]);
// }

// arrayName.forEach(function(element, idex){
// 		console.log(`${idex} : ${element}`);
// });

// for(let key in arrayName){
// 	console.log(`${key} : ${arrayName[key]}`);
// }
// 

for (let key of arrayName) {
    console.log(key);
}

const button = document.querySelector('button');
    button.onclick = function () {
        let name = prompt('What is Your Name');
        alert('Hello' + name + ', nice to see you!');
    }

/**
 * object 
 */


let dog = {
    name: 'Spot',
    breed: 'Dalmatian'
};

for (let i = 0; i < dog.length; i++) {
    console.log(dog[i]);
}

let name = "ashraf";
let number = 20;

console.log(number);
console.log(name);

//number 
//
let x = 20;
let y = 10;
let z = x + y;

console.log(z);

//string

let string = "Hi There My Name is Ashraf";
console.log(string);
console.log('String Length: ' + string.length);

//function
function funName() {
    console.log('Hello Wrold');
}

funName();