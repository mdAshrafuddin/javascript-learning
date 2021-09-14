const person = {fname:"John", lname:"Doe", age:25};

let text= "";
for(let p in person) {
    text += person[p] + '\n';
}

console.log(text)