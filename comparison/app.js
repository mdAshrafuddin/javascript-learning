function myFunction(){
    let voteable;
    let age = Number(document.getElementById('age').value);

    if(isNaN(age)) {
        voteable = 'No found here';
    }else {
        voteable = (age <= 18) ? "Too Young" : "Old enough";
    }

    document.getElementById('demo').innerHTML = voteable;
}