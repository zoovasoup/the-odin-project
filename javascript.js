/*
const MAX = 57 ;
let actual = MAX - 13;
let percentage = actual/MAX;


if (age >= 14 && age <= 90) {

}

if (age <= 14 && age >=90){

}

if ( !(age>=14 && age<=90)) {

}

if (age <14 || age > 90) {

}
*/

let username = prompt('who\'s there?','');

if (username === 'Admin'){

    let pass = prompt('password','');

    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === 'cancel' || pass === 'null') {
        alert('cancel');
    } else { 
        alert('Wrong password');
    }

} else if (username === '' || username === null){ 
    alert('canceled');
} else {
    alert('i don\'t know you');
}