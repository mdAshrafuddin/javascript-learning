const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let result = ''

for (let i=0; i < cars.length; i++){
	result += cars[i] + '\n';
}

console.log(result)

// for(let i = 0; i < 10; i++) {
// 	console.log(i)
// 	// document.getElementById('demo').innerHTML += i + "<br>";
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
// }
// document.getElementById('demo').innerHTML = text;
// // var num;

// let result  = "";
// let i = 0;

// do{
// 	i = i + 1;
// 	result = result + i + "\n";
// } while(i < 10);

// console.log(result)

// let result = "";
// let x = 0;

// while(x < 10) {
// 	x = x + 1;
// 	result = result + x + " ";
// 	if (x == 5) {
// 		continue;
// 	}
// }

// console.log(result)

// expected result: "12345"

// do {
// 	console.log('Inside the loop', num);
// 	num = prompt("Enter the number ");
// } while(num < 10);

// console.log('out site the loop');

// var num = 0;

// while(num < 10) {
// 	console.log('Insate the number', num);
// 	if (num == 5){
// 		console.log(num, 'is skiped');
// 		continue;
// 	}
// 	num = prompt('Enter the number: ')
// }
// console.log("Out site number ")

// const person = {fname:"John", lname:"Doe", age:25};

// text = "";
// for (let i in person){
// 	text += person[i] + " <br>";
// }
// document.getElementById('demo').innerHTML = text;

// let person = [45, 4, 9, 16, 25];

// let text = " ";

// person.forEach(myFun);
// document.getElementById('demo').innerHTML = text;

// function myFun(value){
// 	text +=  value  + "<br>";
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = " "
// for(let x of cars){
// 	text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// console.log("<br>");
// //continue

// for(let m = 0; m < 10; m++ ){
// 	if (m == 2) {
// 		console.log('Yes!! 2!!');
// 		// continue;

// 		break;
// 	}

// 	console.log('Item: ' + m);
// }

// //even and odd
// //
// for(let n = 0; n < 10; n++){
// 	if (n % 2 == 0) {
// 		console.log(`${n} is even`);
// 	}else{
// 		console.log(`${n} is odd`);
// 	}
// }

// //array

// let arrayname = ['ashraf', 'tanjil', 'tamim'];
	
// 	for(let a = 0; a < arrayname.length; a++){
// 		console.log(arrayname[a]);
// 	}


// ///array 

// let cats = ['jula', 'math', 'nono', 'hmmm'];

// 	info = "Nice Cats ";

// 	para = document.querySelector('p');

// 	for(let i = 0; i < cats.length; i++){
// 		info += cats[i] + ' , ';
// 	}

// 	para.textContent = info;
//for looping
// let i;

// for(i = 0; i < 10; i++){
// 	console.log(i);
// }
// `<h1>WHile looping</h1>`
// let a = 0;
// let n = 0;
// while( a < 10){
// 	console.log(a);
// 	// document.write(a);
// 	a++;
// 	n +=a;
// 	document.write(n + '<br>');
// }

// document.write(n);

// //labeled statement

// var str = "";

// loop1:
// for (var m = 0; m < 5; m++) {
//   if (m === 1) {
//     continue loop1;
//   }
//   str = str + m;
// }

// console.log(str);
// // expected output: "0234"
// // 

// for(let x = 0; x < 10; x++){
// 	if (x % 2 == 1 ) {
// 		continue;
// 	}
// 	console.log(x);
// }

// for(let w = 0; w < 5; w++){
// 	for(let t = 0; t < 5; t++){
// 		 let input = prompt(`Value at coords (${w},${t})`, '');
// 	}

// }
// alert('Done!');

// let  a1 = ['ashraf', "tanjil"];

// for(let key in a1 ){
// 	console.log(`${key} : ${a1}`);
// }

// let arrayName = ['ruma', 'Tamim'];

// for(let vl of arrayName){
// 	console.log(vl);
// }

// let array1 = [1,3,4,5,66,];

// array1.forEach(function(element){
// 	console.log(element);
// })