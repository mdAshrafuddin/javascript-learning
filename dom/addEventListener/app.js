 document.getElementById('btn1').addEventListener('click', function () {
 	document.getElementById('demo').innerHTML = "Ashraf Uddin";
})

 let x = document.getElementById('btn');

 x.addEventListener('click', myFunction);
 x.addEventListener('mouseover', myFunction1);
 x.addEventListener('mouseout', myFunction2);

 function myFunction() {
 	document.getElementById('demo1').innerHTML += "My Click Here <br>";
 }

 function myFunction1() {
 	document.getElementById('demo1').innerHTML += "My Mouse over Here <br>";
 }

function myFunction2() {
	document.getElementById('demo1').innerHTML += "My Mose out here <br>";
}


let a = 3;
let b = 30;

let y = document.getElementById('btn2');

y.addEventListener('click', function() {
	myFun1(a, b);
});

function myFun1(a, b) {
	let result = a + b;

	document.getElementById('demo2').innerHTML = result;
}

let m = document.getElementById('myDIV');

m.addEventListener('mouseover', myFun);

function myFun() {
	document.getElementById('demo3').innerHTML = Math.random();
}

function removeHandler() {
	document.getElementById('myDIV').removeEventListener('mouseover', myFun);
}