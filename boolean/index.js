let a = 10;

document.getElementById('demo').innerHTML = 

"value is " + Boolean( 10 > 9 )+ "<br>" +
"100 is " + Boolean(100) + "<br>" +
"3. 14 is " + Boolean(3.14) + "<br>" +
"Any (not empty) string is " + Boolean("Hello") + "<br>" +
"Even the string is " + Boolean(false)


let x = false;
let y = new Boolean(false);
document.getElementById('demo1').innerHTML = Boolean(x == y)
