// let varAge = 20;

// if (varAge >= 21 && varAge < 60) {
//     document.getElementById('demo').innerHTML = 'You are young Persion';
// }

// let whatData = "sunday";

// if (whatData === 'friday') {
//     gretting = 'It is a close day';
// } else if (whatData === 'thursday') {
//     gretting = "It is partially day";
// } else if (whatData === 'Saturday') {
//     gretting = "Some office are closed"
// } else {
//     gretting = "It is a normal working day"
// }

// document.getElementById('demo').innerHTML = gretting;



// Find three miximum number
let num1 = parseFloat(prompt('Enter the first number '));
let num2 = parseFloat(prompt('Enter the secound number '));
let num3 = parseFloat(prompt('Enter the thrid number '));

if(num1 >= num2 && num1 >= num3) {
    result = num1;
} else if (num2 >= num1 && num2 >= num3) {
    result = num2;
} else {
    result = num3;
}

document.getElementById('demo').innerHTML = result;