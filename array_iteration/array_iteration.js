// Foreach iteration
const list = [1, 2, 3, 4, 5, 6];

let text = "<ul>";
    list.forEach(myFun);
text += "</ul>";

function myFun(value){
    text += "<li>" + value + "</li>";
}

document.getElementById('demo').innerHTML = text;

let map_list = [1, 2, 5, 6, 7, 8];

let x = "<ul>";
let result =  map_list.map(function(value, index, array) {
    return "<li>" + value * 2 + "</li>";
});
x = "</ul>";

document.getElementById('demo1').innerHTML =  result;

let filter_result = [22, 44, 55, 66, 2];

filter_result.filter(function (value, index, array){
    if(value > 2) {
        document.getElementById('demo2').innerHTML += " " + value;
    }
}) 

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(function(total, value, index, array) {
    return total + value;
});
document.getElementById('demo3').innerHTML = sum

const every_numbers = [45, 4, 9, 16, 25];

let res_every =  every_numbers.some(function(value) {
    return value > 2
});
document.getElementById('demo4').innerHTML = res_every;

const fruits = ["Apple", "Orange", "Apple", "Mango"];

let fruits_res = fruits.lastIndexOf('Apple');
document.getElementById('demo5').innerHTML = fruits_res;

const numbers_find = [4, 9, 16, 25, 29];

let result_find = numbers_find.find(function(value) {
    return value > 3
});

document.getElementById('demo6').innerHTML = result_find;

let fruits_keys = ["Banana", "Orange", "Apple", "Mango"];
let keys = fruits_keys.keys();

let text_keys = "";
for (let x of keys) {
    text_keys += x + "<br>";
}

document.getElementById("demo7").innerHTML = text_keys;

const myArr = Array.from("ABCDEFG");
document.getElementById("demo8").innerHTML = myArr;

// let list = [2, 3, 4, 5, 6, 7, 85];

// // let text = " "
// // list.forEach(function ListFun(value) {
// //     text += value + "<br>";
// // }); 

// // document.getElementById('demo').innerHTML = text;


// // let result = list.map(function map_fun(value) {
// //     return value * 2;
// // });

// // document.getElementById('demo').innerHTML = result;

// let every_result = list.every(function every_fun(value) {
//     return value > 1;
// });

// let some_result = list.some(function some_result(value) {
//     return value > 21;
// });

// let x = list.lastIndexOf(85);

// let result = list.includes(2);

// let find_result = list.find(function find_fun(value) {
//     return value > 4;
// });

// let findIndex = list.findIndex(function find_fun(value) {
//     return value > 4;
// });

// const myArr = Array.from("ABCDEFG");

// const keys = list.keys();

// let text = "";
// for(let x of keys) {
//     text += x + "<br>";
// }

// document.getElementById('demo1').innerHTML = text;
// // console.log(text);
// console.log(every_result);
// console.log(some_result);
// console.log(x);
// console.log(result);
// console.log('First find element of 4: ', find_result);
// console.log('First find element of 4 index: ', findIndex);
// console.log(myArr);

