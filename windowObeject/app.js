if (confirm('Are you Sure?')) {
	console.log('Deleted...');
}else{
	console.log('Nothing Happens')
}


//Retrive width and height of the window

let height, width;

height = window.outerHeight;
width = window.outerWidth;

height = window.innerHeight;
width = window.innerWidth;
if (width > 1000) {
	document.body.style.backgroundColor = 'red';
}else if(width > 500){
	document.body.style.backgroundColor = 'blue';
}else{
	document.body.style.backgroundColor = 'green';
}
console.log(height);
console.log(width)

//location

let urlLocation = window.location;

console.log(urlLocation.host);
console.log(urlLocation.hostname);
console.log(urlLocation.port);

console.log(urlLocation);