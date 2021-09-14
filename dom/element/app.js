function myFunction() {
	let x = document.getElementById('myDIV');
	x.classList.add('myStyle', 'myBorder');
}

function myFunction1() {
	let x = document.getElementById('myDiv1');

	x.classList.remove('myStyle', 'myBorder');
}


function myFunction2() {
	let x = document.getElementById('myDIV2');

	x.classList.toggle('myToggle');
}