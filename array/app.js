let car =  ['BMW', 'TYTA', 'TATA'];
let ob_car = {
	name: 'AShraf',
	age : 34, 
	id  : 345,
}
ob_car[0] = 'AS'
for(let i in ob_car) {
	console.log(ob_car[i])
}
console.log(ob_car.name);
console.log(car);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fLen = fruits.length;

let text = "<ul>";

for (let i = 0; i < fLen; i++) {
	text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>"
document.getElementById('demo').innerHTML = text;

const fruits_food = ["Banana", "Orange", "Apple", "Mango"];

let result = "<ul>";
fruits_food.forEach((value) => {
	result += "<li>" + value + "</li>";
});
text += "<ul>";
document.getElementById('demo1').innerHTML = result;


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Ashraf"); //Add new element in last 
// let fLen = fruits.length;


// text = "<ul>";

// for(let i = 0; i < fLen; i++) {
// 	text += "<li>" + fruits[i] +"</li>";
// }

// text += "</ul>";

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// // document.getElementById('demo').innerHTML = text;
// function myFunction(value) {
// 	text += "<li>" + value + "</li>";
// }
// document.getElementById('demo').innerHTML = text;

// console.log(typeof(fruits));
// console.log(Array.isArray(fruits));
// console.log(fruits instanceof Array);
// // let result = list[0];
// let x = list.length;
// let n = list.sort();

// console.log(result);
// console.log(n);
// console.log(x);
// console.log(list[0]);

// let persion = {
// 	name:'AShraf',
// 	age:45,
// 	nameAge: function () {
// 		return this.name + " " + this.age;
// 	}
// }; //Array objects

// console.log(persion.nameAge());

// const cars = ["Saab", "Volvo", "BMW"];
// const fLen = cars.length;

// let text = "<ul>"
// 	for(let i = 0; i < fLen; i++) {
// 		text += '<li>' + cars[i] + '</li>';
// 	}
// text += '</ul>';

// document.getElementById('demo').innerHTML = text;

// let persion = {
// 	firstName : 'AShraf',
// 	lastName  : 'Uddin',
// 	age  : 26,

// }


// document.getElementById('demo1').innerHTML = persion.firstName;

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>"
// 	fruits.forEach(myFunction)
//    text += "</ul>"

//    document.getElementById('demo').innerHTML = text;

// function myFunction(value) {
// 	text += " " + "<li>" + value + "</li>"
// }

// var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];

// let text = "<ul>"
// for(let i = 0; i < arrName.length; i++) {
// 	text += "<li>" + arrName[i] + "</li>";
// }

// text += "</ul>";

// document.getElementById('demo').innerHTML = text;

// let text = "<ul>";
// 	arrName.forEach();
// text += "</ul>";

// function myFunction(value){
	
// }

// let persion = ['AShraf', 'Tanjil', 'Tamim']

// for(let i = 0; i < persion.length; i++) {
// 	document.getElementById('demo').innerHTML  += " " + persion[i]
// }