let arrayName = ['arrayName', 'Ahraf','Tanjil'];

for(let i = 0; i < arrayName.length; i ++){
	document.write(arrayName[i]);
	console.log(arrayName[i]);

}
document.write('<br>');
arrayName.forEach(function(element, index){
	document.write(`${index} : ${element}`);
	document.write('<br>');
})

//map
document.write('<br>');
document.write('<h1>Maping for Lopping</h1>');
const shoppingCart = [
	{id: 1, product: 'Book'},
	{id: 1, product: 'Shirt'},
	{id: 1, product: 'Album'},
]

const productName = shoppingCart.map(function(productName){
	return productName.product;
});
document.write(productName);
console.log(productName);

//lterators in ES6

let myCar = {
	model  : 'Camaro',
	engine : 6.0,
	year   : 1968,
	make   : 'Chevy'
}

for(let key in myCar){
	console.log(`${key} : ${myCar[key]}`);
}