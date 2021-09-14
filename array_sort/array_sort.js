const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
document.getElementById('demo').innerHTML = points;
function myFun() {
    points.sort(function(a, b){ return b - a});
    document.getElementById('demo1').innerHTML = points;
}
// let furits = ['Apple', 'Orange', 'Banana']

// // document.getElementById('demo').innerHTML = furits.sort()

// document.getElementById('demo').innerHTML = furits;

// function myFun() {
//     furits.sort() // Sort array
//     furits.reverse() // Reverse array
//     document.getElementById('demo').innerHTML = furits;
// }

// let list = [23, 4455, 1, 4, 6, 7];

// list.sort(function sortFun(a, b) {
//     return b - a;
// });

// document.getElementById('demo1').innerHTML = list;

// let point = [2, 4, 5, 6, 77, 88, 9,1, 3];

// document.getElementById('demo').innerHTML = myMaxValue(point);

// // function myFun() {
// //     for(let i = point.length - 1; i > 0; i--) {
// //         let j = Math.floor(Math.random * i);
// //         let k = point[i];
// //         point[i] = point[j];
// //         point[j] = k;
// //     }
// //     document.getElementById('demo').innerHTML = point
// // }

// function myMaxValue(arr) {
//     return Math.min.apply(null, arr);
// }

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// diplayCars();

// function myFun() {
//     cars.sort(function cars(a, b) {
//         let x = a.type.toLocaleLowerCase();
//         let y = b.type.toLocaleLowerCase();
//         if (x < y) { return -1;} 
//         if (x > y) {return 1;}
//         return 0;
//     });
//     diplayCars();
// } 

// function diplayCars(){
//     document.getElementById('demo').innerHTML = 
//     cars[0].type + " " + cars[0].year + "<br>" +
//     cars[1].type + " " + cars[1].year + "<br>" +
//     cars[2].type + " " + cars[2].year; 
// }