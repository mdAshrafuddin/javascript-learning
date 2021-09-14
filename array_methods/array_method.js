const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById('demo').innerHTML = fruits.toString();
fruits.push('AShraf');
document.getElementById('demo').innerHTML = fruits;
fruits.pop();
document.getElementById('demo').innerHTML = fruits;
fruits[0] = 'Tanjil'
document.getElementById('demo').innerHTML = fruits;
fruits.unshift('Tamim');
document.getElementById('demo').innerHTML = fruits;
fruits.shift();
document.getElementById('demo').innerHTML = fruits;
document.getElementById('demo').innerHTML = fruits.join('*');
delete fruits[1];
document.getElementById('demo').innerHTML = fruits;
const res_slice = fruits.slice(0);
document.getElementById('demo').innerHTML = res_slice;

document.getElementById('demo1').innerHTML = "<h1> Orginal value: </h1>" + fruits;

function myFun() {
    fruits.splice(2, 0, 'Ashraf', 'Tanjil');
    document.getElementById('demo11').innerHTML = '<p> New Value : </p>' + fruits;
}

let persion = ['Ashraf', 'Tanjil', 23];

document.getElementById('demo2').innerHTML = persion;
function my_fun() {
    persion.splice(0, 1);
    document.getElementById('demo3').innerHTML = persion;
}

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
document.getElementById('demo4').innerHTML = myGirls.concat(myBoys);

// let list   = ["Banana", "Orange", "Apple", "Mango"];
// let result = list.toString();
// let x      = list.join('*');
// list[0] = "KawJa"; 

// console.log(list);
// list.unshift('Tanjil');
// console.log(list);
// list.shift();
// console.log(list);
// list.push("Ashraf");
// console.log(list);
// list.pop()
// console.log(list)
// console.log(x);
// console.log(result);

// document.getElementById('demo1').innerHTML = list;

// function myFun() {
//     list[list.length] = 'KWIWi';
//     document.getElementById('demo1').innerHTML = list;
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// document.getElementById('demo2').innerHTML = '<h1>Orginal Value: </h1>' + fruits;

// function my_fun() {
//     fruits.splice(0, 1);
//     document.getElementById('demo3').innerHTML = '<h1> New value:</h1> ' + fruits;
// }

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// let result_con = myGirls.concat(myBoys);

// document.getElementById('demo4').innerHTML = "<h2>Cncat Value: </h2>" + result_con;

// const fruits_slice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// document.getElementById('demo5').innerHTML = "<h2>Slice Value: </h2>" + fruits_slice;


// let result_slice = fruits_slice.slice(2);
// document.getElementById('demo6').innerHTML = "<h2>Slice remove Value : </h2>" + result_slice;

// document.getElementById('demo').innerHTML = list.join("*"); 
// document.getElementById('demo1').innerHTML = list;
// list.pop()
// document.getElementById('demo').innerHTML = list;
// console.log(list);
// list.pop()
// console.log(list);

// let list = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById('demo').innerHTML = list;
// function myFun() {
//     document.getElementById('demo').innerHTML = list.push('Ashraf');
//     document.getElementById('demo1').innerHTML = list;
// }

// let list = ["Banana", "Orange", "Apple", "Mango"];
// let list1 = ['Tanjil', 'Ruma', 'Tamim'];

// document.getElementById('demo1').innerHTML = list
// list.unshift('Tanjil');

// document.getElementById('demo').innerHTML = list

// let result = list.slice(0, 2, 'Ashraf', 'sad');

// document.getElementById('demo').innerHTML = result;

// document.getElementById('demo1').innerHTML = "<b> Orginal Array: </b>" + list;

// function myFun() {
//     let removed = list.splice(2, 2, 'Tanjil', 'Tamim');
//     document.getElementById('demo2').innerHTML = "New array: " + list;
//     document.getElementById('demo3').innerHTML = "Remove Array: " + removed;
// }

// let result = list.concat(list1);
// let result_slice = list.slice(2);

// document.getElementById('demo1').innerHTML = result;
// document.getElementById('demo2').innerHTML = result_slice;

