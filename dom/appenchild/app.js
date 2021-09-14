let x = document.getElementById('myBtn');

x.addEventListener('click', myFun);

function myFun() {
	let node = document.createElement('p');
	let text = document.createTextNode("Hlleo ashraf");
	node.appendChild(text);

	let el = document.getElementById('mydiv');
	el.appendChild(node);
}

// let a = document.createElement('p');
// let text = document.createTextNode("Hi There");
// a.appendChild(text);

// document.getElementById('div1').appendChild(a);

// let parent = document.getElementById('div1');
// let child  = document.getElementById('p1');
// parent.removeChild(child);

let para = document.createElement('p');
let node = document.createTextNode('new value');

para.appendChild(node);

let pr = document.getElementById('div1');
let ch = document.getElementById('p1');

pr.replaceChild(para, ch);