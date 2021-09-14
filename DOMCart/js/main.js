   // let element = document;

 	element = document.all;
// 	element = document.characterSet;
// 	element = document.contentType;
// 	element = document.fonts;
// 	element = document.links;
// 	element = document.URL;
// 	element = document.forms;
// 	element = document.images;
// 	element = document.links[0];
// 	element = document.links[0].id;
// 	element = document.links[0].className;
// 	element = document.action;
// 	element = document.classList;
// 	console.log(element);


// const images = document.images;

// let arrayImges = Array.from(images);	
// 	arrayImges.forEach(function(element){
// 		console.log(element);
// 	});


// let heading = document.querySelector('#heading')

// 	heading.style.backgroundColor = 'red';
// 	heading.style.padding         = '10px';
// 	heading.style.color           = '#fff';

// let learing = document.querySelector('#learn');


// 	learing.innerHTML = "Nice Moment";

// let tagLine = document.querySelector('.tagline');


// let newText = tagLine.textContent.replace('$15', '$12');

// tagLine.textContent = newText;

// let link;

// 	link = document.querySelectorAll('#primary a:first-child');
// 	console.log(link);

// let cards = document.querySelectorAll('.card h4');

// let ArrayCards = Array.from(cards);

// 	ArrayCards.forEach(function(element){
// 		console.log(ArrayCards);
// 	});
// //odd and event


// let primaryOdd = document.querySelectorAll('#primary a:nth-child(odd)');

// 	primaryOdd.forEach(function(odd){
// 		odd.style.backgroundColor = 'red';
// 		odd.style.color           = '#fff';
// 		odd.style.padding         = '10px';
// 	});


// let primaryEven = document.querySelectorAll('#primary a:nth-child(even)')

// primaryEven.forEach(function(even){
// 	even.style.backgroundColor = '#000';
// 	even.style.color           = '#fff';
// 	even.style.padding         = '10px';
// });

// let addToCard  = document.querySelectorAll('.add-to-cart');

// 	addToCard.forEach(function(element){
// 		element.textContent = 'new Text Nice';
// 	});

	///parent to child

// let coursesList = document.querySelector('#courses-list');

// let coursesListElement = coursesList;
// 	coursesListElement = coursesList.childElements;
// console.log(coursesListElement);


// const navigation = document.querySelector('#primary')

// let element = navigation.childNodes;
// 	element = navigation.children[0].nodeType;
    
// console.log(element);

const coursesList = document.querySelector('#courses-list');

let coursesListElement = coursesList;
	coursesListElement = coursesList.children; 
	// coursesListElement = coursesList.children[1].firstElementChild;
	//  coursesListElement = coursesList.children[1].lastElementChild

console.log(coursesListElement);

const heading = document.querySelector('#heading');
		
	  heading.style.backgroundColor = 'red';
	  heading.style.padding         = '10px';
	  heading.style.color           = '#fff';  	


const primaryOdd = document.querySelectorAll('#primary a:nth-child(odd)');

	  
	  primaryOdd.forEach(function(odd){
	  	  odd.style.backgroundColor = 'red';
		  odd.style.padding         = '10px';
		  odd.style.color           = '#fff'; 
	  });

const primaryEven = document.querySelectorAll('#primary a:nth-child(even)');

	 primaryEven.forEach(function(even){
	 	  even.style.backgroundColor = 'black';
		  even.style.padding         = '10px';
		  even.style.color           = '#fff'; 
	 });	

//create new element

//create a new 

	// const newLink = document.createElement('a');

	// 	//add a class
		
	// 	 newLink.className = 'link';
	// 	 //add a href
	// 	 newLink.href       = '#';

	// 	 newLink.appendChild(document.createTextNode('New link'));

	// 	 //add the element to the html
		 
	// 	 document.querySelector('#primary').appendChild(newLink)


	// console.log(newLink); 


//create  new
// const newLink = document.createElement('a');
// 	  newLink.className = 'newLink';
// 	  newLink.href      = '#';

// 	  newLink.appendChild(document.createTextNode('New link'));
// 	  document.querySelector('#primary').appendChild(newLink);	
// console.log(newLink);

//add local storage

// localStorage.setItem('name', 'Juan');
// localStorage.removeItem('Juan');
// localStorage.setItem('name1', 'Juan ashraf');
// localStorage.setItem('name2', 'Juan ashraf');
// sessionStorage.setItem('name', 'Juan');

const localStorageContent = localStorage.getItem('name');

let names;

if (localStorageContent === null) {
	names = [];
}

const myArray = [1, 2, 3];

console.log(myArray);

console.log(localStorageContent);


