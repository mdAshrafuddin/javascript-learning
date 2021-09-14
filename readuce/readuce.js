let list = [1, 53, 4, 55, 6, 77, 88, 45];

let result = list.reduce(function my_fun(total, value, index, array) {
    return total + value;
});

document.getElementById('demo').innerHTML = result;
// console.log(result);