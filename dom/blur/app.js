function getfocus() {
	document.getElementById('myAnchor').focus();
}

function losefocus() {
	document.getElementById('myAnchor').blur();
}

function getFocus1() {
	document.getElementById('myText').focus();
}

function loseFocus1() {
	document.getElementById('myText').blur();
}


function myFunction() {
  let x = document.getElementById('myImg');

  let text = "";
  let i;

  for(i=0; i < x.attributes.length; i++) {
  	text = text + x.attributes[i].name + "=" + x.attributes[i].value + "<br>";
  }
  document.getElementById('demo').innerHTML = text;
}

function myFunction1() {
  var c = document.body.children;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].tagName + "<br>";
  }

  document.getElementById("demo1").innerHTML = txt;
}