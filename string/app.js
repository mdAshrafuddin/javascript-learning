//Define string
let text = "Ashraf Uddin";

console.log(text);

let double = "Double";
let single = 'Single';

console.log(double);
console.log(single);

let answer1 = 'Ashraf it\'s';
let answer2 = 'AShraf is best "persion"';
let answer3 = "What is your 'name'";

console.log(answer1);
console.log(answer2);
console.log(answer3);

let x = 'AShrafUddinCVvhowdhury';
console.log(x.length);

let text1 = "My name is \"Ashraf\"";
let single1 = 'Ashraf Udd\'in\''
let backSlash = 'nice // moment';
let Backspace = 'Backspace \f';
let n = 'Good'; // string
let m = new String('Good') //object

let a =new String('GOOD') // string
let b = new String('Good') //object

console.log(a == b); 
console.log( a === b);

console.log(n == m); //n and m value same it is true
console.log(n === m); // n and m false because type not same 


console.log(typeof(n)); //String
console.log(typeof(m)); //objects

console.log(Backspace);
console.log(backSlash);
console.log(single1);
console.log(text1);


// let a = 'a';
// let b = 'b';

// if (a > b) {
// 	console.log(a + ' is less than ' + b);
// }else if(a < b){
// 	console.log(a + ' is greater than ' + b);
// }else{
// 	console.log(a + ' and ' + b + ' are equal.');
// }

// let name  = 'ashraf uddi\'n ';
// let nicem = 'hi say that nic\'e moment ';

// let learning = 'Javascritp ',
// 	modern   = 'Modern ';
// let band     = 'Nice Song';
// let song     = 'Enter Sandman';
// let palyin = 'Playing : ' + song + 'by' + band;

// console.log(palyin);
// console.log("Learning: " + modern + learning);
// console.log(nicem);
// console.log(name);

// //String length
// //leangth
// const lengthStaring = "Learning Javascritp Nice";
// const email         = 'emaileamil.com';  

// let output;
// 	output = lengthStaring.length;
// //concat

// output = lengthStaring.concat(" ", "And Fun");

// //uppercase
// output = lengthStaring.toUpperCase();
// //lowercase
// output = lengthStaring.toLowerCase();
// //idexOf

// output = lengthStaring.indexOf('Javascritp');
// //Check if @ exist on the form

// output = email.indexOf("@");

// if (output > 0) {
// 	console.log("valid Email");
// }else{
// 	console.log("Invalid Email");
// }

// //substring
// output = lengthStaring.substring(0, 10);
// output = lengthStaring.substring(4, 10);
// output = lengthStaring.substring(lengthStaring.length -3);
// output = lengthStaring.slice(2, 10);
// output = lengthStaring.slice(-10);
// //split
// output = lengthStaring.split(' ');
// //example
// const hobbies = 'read, walk, listen to music, write, learn to programimg';

// output = hobbies.split(' ');

// output = learning.replace('Javascritp', 'Modern Js'); 
// output = learning.includes('PHP'); 

// let greet = "Hello ";
// output = greet.repeat(5); 

// console.log(output);

// let m = '22';
// let n = 20;

// console.log(Number(m) + n.toString()); 

// let number = Number('20');
// 	number = Number('20.2019');
// 	number = Number("ashraf uddin");

// console.log(number);

// let number1 = parseInt('100');
//     number1 = parseInt('100.20');
//     number1 = parseFloat('100.20');

//     console.log(number1)

// let number2 = '91273738838.10223';

// console.log(Number(number2).toFixed(2)); 

// let output1 = "Ashraf";
// output1 = String(true);
// output1 = new Date();
// output1 = String(output1);
// console.log(output1);

// output = [1,3,4].toString();
// output = {name : 'AShraf'}.toString();
// console.log(output);
// console.log(typeof(output));   


	// document.write('<br>');
	// let string = "Just like we did with numbers, we are declaring a variable";

	// document.write(string);
	// document.write('<br>');
	// let one = "Ashraf";
	// let two = "Uddin";
	// let sum = one + two;
	// document.write(sum);	

	// let a = 'I\'ve lot of my money';

	// console.log(a);
	// document.write('<br>');

	// let button = document.querySelector('button');

	// button.onclick = function(){
	// 	let name = prompt('What is you name');
	// 	alert('Hello ' + name + ' nice to me too');
	// }
	// document.write('<br>');
	// let myString = '1234';
	// let number   = Number(myString);

	// console.log(typeof(number));

	// let lengthStaring = 'This page isn\'t available offline.';
	// let StringLen     = 'ashraf Uddin';
	// let concat_string = lengthStaring.concat(' ', StringLen);

	// document.write('<br>');
	// let length        = lengthStaring.length;
	// document.write('<br>');

	// document.write(concat_string);

	// document.write('<br>');
	// document.write('Length : ', length -1);
	// let lengthIndx   = "available offline";
	// let length_index = lengthIndx.indexOf('offline');
	// console.log(length_index);

	// var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

	// var searchTerm = 'dog';
	// var indexOfFirst = paragraph.indexOf(searchTerm);

	// console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
	// // expected output: "The index of the first "dog" from the beginning is 40"

	// console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
	// // expected output: "The index of the 2nd "dog" is 52" 

	// let indexLenngth = 'Also, if you know that you want to extract ';
	// let sliceIndx    = indexLenngth.slice(0, 10);

	// console.log(sliceIndx);
	// console.log(indexLenngth.toLowerCase());
	// console.log(indexLenngth.toUpperCase());

	// console.log(indexLenngth.replace('extract', 'Nice'));

	// let sliceInd   = 'Also, if you know that you want to extract all';

	//     let sliceStrat = sliceInd.slice(0, 10);
	//     sliceStrat = sliceInd.length;
	//     sliceStrat = sliceInd.indexOf('you');
	// 	sliceStrat = sliceInd.length;

	// 	console.log(sliceStrat -1);
	//     console.log(sliceStrat);
	//     console.log(sliceInd.replace('Also', 'GOod Person'));

