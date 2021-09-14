const numbers = [45, 4, 9, 16, 25];

let text = "<ul>"; //Array Foreach methods
numbers.forEach(myFunction);
text += "</ul>";

function myFunction(value, index) {
    text += "<li>" + index + ' ' + value + "</li>";
}

document.getElementById('demo').innerHTML = text;

//map() methods

const map_res = ['AShraf', 'tanjil', 'tamim', 'Ruma'];


let result = map_res.map(function(value) {
    return value.toUpperCase();
});
console.log(result);

document.getElementById('demo1').innerHTML = "<li>" + result + "</li>";


// Array filter()
const numbers_filter = [45, 4, 9, 16, 25];
 
let res_filter =  numbers_filter.filter(function(value) {
    return value > 4;
});

document.getElementById('demo2').innerHTML = res_filter;

//Array reduce()
const numbers_reduce = [45, 4, 9, 20, 25];

let res_reduce = numbers_reduce.reduceRight(function(total, value, index) {
    return total + value;
});

document.getElementById('demo3').innerHTML = res_reduce;

//Array every()
const numbers_every = [45, 4, 9, 20, 25];

let res_every = numbers_every.every(my_fun_ev);

function my_fun_ev(value) {
    return value > 10;
}

console.log(res_every);
document.getElementById('demo4').innerHTML = res_every;

//Array some()
const numbers_some = [45, 4, 9, 20, 25];

let res_some = numbers_some.some(my_fun_some);

function my_fun_some(value) {
    return value > 10;
}

console.log(res_some);
document.getElementById('demo5').innerHTML = res_some;

// firstIndex
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf('Orange')  + 1;

console.log(position)
document.getElementById('demo6').innerHTML = position;

//lastIndex
const fruits_last = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits_last.lastIndexOf('Orange')  + 1;

console.log(position)
document.getElementById('demo7').innerHTML = position;

const numbers_find = [4, 9, 16, 25, 29];

let res_find = numbers_find.find(function(value) {
    return value > 2;
});

document.getElementById('demo8').innerHTML = res_find;

const numbers_findIndex = [4, 9, 16, 25, 29];

let res_findIndex = numbers_findIndex.findIndex(function(value) {
    return value > 2;
});

document.getElementById('demo9').innerHTML = res_findIndex;

//Keys 

const fruits_keys = ["Banana", "Orange", "Apple", "Mango"];
let keys_res = fruits.keys();

for(i of keys_res) {
    console.log(i);
    document.getElementById('demo10').innerHTML += i + "<br>";
}

//from()
const myArr = Array.from("ABCDEFG");
console.log(myArr);