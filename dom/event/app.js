let  result = document.getElementById('demo');

function displayDate() {
	result.innerHTML = new Date();
}

// MouseOver and MouseOut
function mOver(obj) {
	obj.innerHTML = 'Thank you';
}

function mOut(obj) {
	obj.innerHTML = 'Mouse Over Me';
}