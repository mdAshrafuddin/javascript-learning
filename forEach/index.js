ar_list = ['ashraf', 'tanjil', 'tamim']

ar_list.forEach(my_fun);

function my_fun(value) {
    document.getElementById('demo').innerHTML += value + "<br>";
}