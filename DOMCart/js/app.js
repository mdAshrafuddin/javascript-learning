// let element = document;
// 	element = document.all;
// 	element = document.head;
// 	element = document.body;
// 	element = document.contentType;
	
// 	element = document.domain
// 	element = document.URL;
// 	element = document.characterSet;
// 	//links
// 	element = document.links;
// 	element = document.links[2];
// 	element = document.links[2].id;
// 	element = document.links[2].className;

// 	//froms
// 	element = document.forms;
// 	element = document.forms[0].id;
// 	element = document.forms[0].action;
// 	element = document.forms[0].className;
// 	element = document.forms[0].classList[0];

// 	//images
	
// 	element = document.images;

// 	//Scripts
	
// 	element = document.scripts[0].getAttribute('src');

// 	//looping all the iamges
// 	let iamges = document.images;
// 	let imagesArray = Array.from(iamges);
	

// 	imagesArray.forEach(function(image){
// 		console.log(image);
// 	});



// console.log(element);

// let heading = document.querySelector('#heading');

// 	heading.style.backgroundColor = 'red';
// 	heading.style.padding         = '10px';
// 	heading.style.color           = '#fff';
// 	//change the content
// 	heading.textContent           = 'Nice Project';
// 	heading.innerHTML             = 'Heading line Nice';

// let learn = document.querySelector('#learn');

// 	learn.textContent = 'New Text content';

// let tagline = document.querySelector('.tagline');

// let newText = tagline.textContent.replace('$15', '$12');

// 	tagline.textContent = newText;

// 	//Setect a tag
// let heading_H2  = document.querySelector('h2');
// //nest your selectors with a css syntax

// let image = document.querySelector('.card img');
// //Query selector supports nth-child , first-child, last-child
// //

// 	let link;
	
// 	link = document.querySelector('#primary a:first-child');
// 	link = document.querySelector('#primary a:first-child');


// 	console.log(link);

// 	let primaryLinks = document.getElementsByClassName('link');

// 	primaryLinks[0].style.color = '#fff';
// 	primaryLinks[0].textContent = 'New Text';
// 	primaryLinks[0].style.backgroundColor = 'black';
// 	primaryLinks[0].style.padding = '10px';

// 	// const primaryLinks1 = document.querySelector('#priamry').getElementsByClassName('link');

// 	// 	console.log(primaryLinks1);
	
// 	const imagesTag = document.getElementsByTagName('img');
// 		//Convert HTML Collected into an array
// 		imagesArray = Array.from(imagesTag);

// 		imagesArray.forEach(function(imagesTag){
// 			console.log(imagesTag);
// 		});
// 	console.log(imagesTag); 	
// 	
// 	

// let heading = document.getElementsByTagName('h1');

// console.log(heading);

// let cards = document.querySelectorAll('.card h4');
// const courseArray = Array.from(cards);

// courseArray.forEach(function(cards){
// 	console.log(cards);
// });
// console.log(cards[0]);


// const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

// 	oddLinks.forEach(function(odd){
// 		 odd.style.backgroundColor = 'red';
// 		 odd.style.padding         = '10px';
// 		 odd.style.color           = '#fff';
// 	});


// const eventLinks = document.querySelectorAll('#primary a:nth-child(even)');


// 	eventLinks.forEach(function(even){
// 		even.style.backgroundColor = '#000';
// 		even.style.padding         = '10px';
// 		even.style.color           = '#fff';   
// 	});

// const addCardText = document.querySelectorAll('.add-to-cart');

// 	 addCardText.forEach(function(button){
// 	 	button.textContent = 'Select Text';
// 	 });

// const navigation = document.querySelector('#primary')

// let element = navigation.childNodes;
//     element = navigation.children[0].nodeType;
//     element = navigation.children[0].children;
// console.log(element);


// const coursesList = document.querySelector('#courses-list');

// let elementList   = coursesList.children[1].children[0].children[0].children; 
// 	elementList   = coursesList.children[1].firstElementChild;
// 	elementList   = coursesList.children[1].children[0].children[0].lastElementChild; 

// 	console.log(elementList);

// const coursesList = document.querySelector('.price');

// let elementList;
	
// 	elementList = coursesList;
// 	elementList = coursesList.parentNode;
// 	elementList = coursesList.parentElement.children[0];

// 	elementList = coursesList;
// 	elementList = coursesList.previousSibling;
// 	elementList = coursesList.previousElementSibling;
// 	// elementList = coursesList.lastElementChild;
// console.log(elementList);
// 	//courseName 

// const courseName = coursesList.parentElement.querySelector('h4');
	  
// 	  elementList = courseName.nextElementSibling;	
// console.log(elementList);
// console.log(courseName);

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

	// const newHeading = document.createElement('h2');
	// 	  newHeading.id = 'heading';

	//       newHeading.appendChild(document.createTextNode('The Best Course'));	  
	// //old heading
	// const oldHeading = document.querySelector('#heading');
	// //parent heading
	// const coursesList = document.querySelector('#courses-list');
	// //then replace 

	//      coursesList.replaceChild(newHeading, oldHeading);







	// console.log(newHeading);
	
	// const cards = document.querySelectorAll('.card');

	// let cardRemove = cards[11].remove();		

	// console.log(cardRemove);

	// const navigation = document.querySelector('#primary');

	// const links      = document.querySelectorAll('#primary .link');

	// navigation.removeChild(links[1]);
	
	// console.log(links);
 //    console.log(navigation);

 	//class ids and attributes
 	
 	const link = document.querySelector('.link');
 	let element;

 	element = link;
 	element = link.className;
 	element = link.classList;
 	element = link.classList[0];
 	//add new class
 	
 	link.classList.add('new-class');

 	// remove the class
 	link.classList.remove('link');
 	link.id = 'new-id';
 	link.id = '';
 	link.removeAttribute('id');

 	//Attribute funtion
 	
 	element = link.getAttribute('herf');
 	element = link.getAttribute('class');
 	element = link.setAttribute('href', 'http://ashrafuddin.com');
 	element = link.setAttribute('target','_blank');
 	element = link.setAttribute('data-link','10');
 	element = link.hasAttribute('data-link');
 	element = link.removeAttribute('data-link');
 	console.log(element);

