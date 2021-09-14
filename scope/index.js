// function scopFun() {
//     var scop_var = 'Hi I am a scoping variable';
//     console.log(scop_var)
// }

// scopFun()

// // local scope not result out of function
// console.log(scop_var)

globalScope_var = "Hi, I am global scope"

function globalScope(){
    console.log(globalScope_var);
}

globalScope();
console.log(globalScope_var);

function GlobalScopeFun() {
    console.log('Global function');
    var persion = {
        name: 'Ashraf',
        age: 23,
    }
    function LocalScopeFun() {
        console.log('LocalScope')
    }
    LocalScopeFun();
    console.log(persion)
}

GlobalScopeFun()
