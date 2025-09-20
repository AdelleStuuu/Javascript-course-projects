let hour = 12;
let name = 'Adelle';

if (hour <= 12 && hour >= 6) {
    console.log(`Good morning ${name}`);
} else if (hour <= 17 && hour >= 13) {
    console.log(`Good afternoon ${name}`);
} else {
    console.log(`Good Night ${name}`);
}

let age = 5;
const isHoliday = false;

//this
forDiscount = age <= 6 || 65 <= age && isHoliday === true ? console.log('discount') : console.log('no discount');

//and this
if (age <= 6 || 65 <= age && isHoliday === true) {
    console.log('discount');
} else {
    console.log('no discount');
}
//they are the same 