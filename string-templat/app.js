const name   = "Ashraf Uddin",
	  age    = 20,
	  number = 01753511918,
	  price1 = 20,
	  price2 = 30


let html;

    html = '<ul>'+
	    		'<li>name: '+ name +'</li>'+	
	    		'<li>age: '+ age +'</li>'+	
	    		'<li>number: '+ number +'</li>'+	
	    		'<li>price1: '+ price1 +'</li>'+	
	    		'<li>price2: '+ price2 +'</li>'+	
    		'</ul>';

    html = `
    	<ul>
    		<li>Item: ${ name }</li>
    		<li>Item: ${ age }</li>
    		<li>Item: ${ number }</li>
    		<li>Item: ${ price1 }</li>
    		<li>Item: ${ price2 }</li>
    		<li>Total: ${ Total(price1,price2) }</li>
    	</ul>

    `;		

    function Total(price1,price2) {
    	return price1 + price2;
    }

let app = document.querySelector("#app");
	app.innerHTML = html;
