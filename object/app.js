let persion = {
  name: 'AShraf Uddin',
  age: 23,
  years: 2021,
  id: 253454,
  name_id: function() {
    return this.name + ' ' + this.age + ' ' + this.years + ' ' + this.id;
  }
}

console.log(persion.name_id);

// const perion = {
//   firstName : 'AShraf',
//   lastName  : 'Uddin',
//   age       : 34,
//   id        : 2333241,

//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// document.getElementById('demo').innerHTML = perion.fullName();

// let person = {
//   firstName:'AShraf',
//   lastname : 'Tanjil',
//   age: 34,
//   fullName : function(){
//     return this.firstName + " " + this.lastname;
//   }
// }

// for(let i in person){
//   console.log(i + ': ' +person[i]);
// }
