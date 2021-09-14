function ClosuresFun() {
    var x = 20;
    return function(){
        var y = 30;
        console.log('Sum: ' + (x + y));
    }
}

ClosuresFun()();