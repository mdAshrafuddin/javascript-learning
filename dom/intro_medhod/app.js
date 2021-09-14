function myFunction() {
	let x = document.forms["frm1"];
	let text = "";
	let i;

	for(i = 0; i < x.length; i++) {
		text += x.elements[i].value + "<br>";
	}

	document.getElementById('demo').innerHTML = text;
}

document.getElementById('heading').innerHTML = "Ashraf Uddin"
