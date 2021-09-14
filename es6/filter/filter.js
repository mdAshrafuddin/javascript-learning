let x = [53, 35, 1, 4, 6, 8, 9,];

var result = x.filter((value, index, array) => {
    console.log(index);
    console.log(array);
    return value > 4;
});

console.log(x)
console.log(result)