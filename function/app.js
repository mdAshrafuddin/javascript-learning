// //Function
function myFunction(p1, p2) {
	return p1 * p2;
	
}

const result = myFunction(33,44);
document.getElementById('fun1').innerHTML = result;

function toCelsius(fahrenheit) {
	return (5 / 9) * (fahrenheit - 32);
}

document.getElementById('demo1').innerHTML = 'The temperature is ' + toCelsius(77) + ' Celsius';

my_fun();

function my_fun() {
	let x = 534;
	document.getElementById('demo2').innerHTML = typeof x + ' ' + x;
} 

document.getElementById('demo3').innerHTML = x
 
// function sum(a, b) {
// 	return a + b;
// }

// console.log(sum(2, 4))

// function toCelsius(f) {
// 	return (5 / 9) * (f - 32);
// }

// let result = toCelsius(77);
// console.log('The temperature is ' + result + ' Celsius');

// function localVariable() {
// 	let name = "Hello World";
// 	return name;
// }

// console.log(localVariable())

// function funName(a, b){
// 	var sum = a + b;
// 	return sum;
// }

// console.log(funName(2, 4))

// function toCelsius(f){
// 	return (5 /9) * (f - 32)
// }

// console.log(toCelsius(77))

// function functionName(firstName, lastName, gender) {
// 	if (gender === 'male') {
// 		let output = "Mr " + firstName + " " + lastName;
// 		return output;
// 	} else if(gender === 'female') {
// 		let output = "Ms " + firstName + " " + lastName;
// 		return output;
// 	}
// }

//  var fullName = functionName('Ashraf', 'Uddin', 'male')
 
//  var fullName1 = functionName('Ruma', 'Chowdhury', 'female')
//  console.log(fullName)
//  console.log(fullName1)

//  function funObject() {
// 	 return {
// 		 name : 'Ashraf',
// 		 age  : 50,
// 	 }
//  }

// console.log(funObject().name)
// function userName(name){
// 	document.write(`My name Is ${name} She is cute persion`);
// }

// userName("Ashraf Uddin");



// function FirstLast(firstName = "AShraf", lastName="Tanjil Chowdhury"){
// 	// if (indexof(firstName == 'undefined')) {firstName = 'Tanjil'}
// 	// if (indexof(lastName == 'undefined')) {lastName = 'Ashraf Uddin'}	
// 	console.log(`Hello ${firstName} and ${lastName} welcome to our website`);
// }

// FirstLast();

// function addition(number1, number2){
// 	return number1 + number2;
// }

// let result;

// result = addition(2, 3);
// document.write('<br>');
// document.write('Two Sum Number: ' + result);
// console.log('Two Sum Number: ' + result);

// //Function Expressions

// const sum = function(number1, number2){
// 	return number1 + number2;
// }

// console.log(sum(3, 3));
// console.log(sum(3, 2));
// console.log(sum(3, 99));

// //imediately -invoked function Expressions

// (function(technolgy){
// 	console.log('Learning: ' + technolgy);
// })('javascript');


// //Property Methods
// //

// const musicPlayer = {
// 	play:function(id){
// 		console.log(`Playing song with the Id: ${id}`);
// 	},
// 	pause:function(){
// 		console.log('Pause....');
// 	}


// }

// musicPlayer.play(30);
// musicPlayer.pause();

// //methods can be outside of the object
// musicPlayer.remove = function(id){
// 	console.log(`Remove from the playist, ID: ${id}`);
// }

// // musicPlayer.remove(20);

// // console.log('Javascript');
// // alert();
// // prompt();
// // confirm();

// function helloVisitor(name) {
// 	document.getElementById('fun1').innerHTML = 'Hello ' + name + 'and welcome to our school';
// 	console.log(`Hello ${name} & and Welcome to our website`);
// }

// helloVisitor('AShraf Uddin')