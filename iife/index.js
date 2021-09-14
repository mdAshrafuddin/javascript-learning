// function aDemoFunc(){
//     console.log('Hello world');
// }

// aDemoFunc()

(function myFun() {
    console.log('Hi, There My name is AShraf');
})();


var controler = (function () {
    var a = {
        name: 'AShraf Uddin',
        id  : 3434,
    }
    return a;
})();


var interface = (function() {
    return 'Hello ' + controler.name
})();

