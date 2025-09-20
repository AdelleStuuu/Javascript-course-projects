
//when boolean value is true, the if statement will run
//when boolean value is false, the else statement will run
if (false) {
    console.log('hello');
} else {
    console.log('pookie');
}

/* if statements are used for:
- writing multiple groups of code
- decide which code to run based on a condition
*/

/*syntax rules:
- start if statements with 'if'
- create a condtion in parentheses
- input the code you want to run in curly braces
- use else if to add more conditions
- use else to run code if none of the conditions are met
- else is optional
*/

//example: making a code that checks if someone is old enough to drive
//the variable age is set to a number
let age = 16;
// checks if you are old enough to drive
if (age >= 18) {
    console.log('you can drive');
    console.log('congrats');
} else if (age >= 16) {
    console.log('you can get your license');
} else {
    console.log('you are too young to drive');
}

