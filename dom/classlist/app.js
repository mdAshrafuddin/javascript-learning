
function myFunction() {
	document.getElementById('p1').classList.add('p');
}

function myFunction1() {
	document.getElementById('p1').classList.remove('p');
}

let a = document.getElementById('MyBtn');

a.addEventListener('click', myFunction1);

function myFunction1() {
	document.getElementById('h1').classList.toggle('myToggel');
}