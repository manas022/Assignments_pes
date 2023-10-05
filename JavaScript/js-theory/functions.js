/* Functions are the mental building blocks in javaScript. A function is nothing but piece of reusable code(particularly performs a task) that we can call anytime within our code and execute to make use of it. */

// function greet() {
//     console.log("hello world");
// }
// greet();

// function greet(name) {
//     console.log("hello " + name);
// }
// greet('Manas');

//in here what given to the function greet is a PARAMETER(name) and while giving it the value at the end (manas) is and ARGUMENT.

/*A PARAMETER is what we have at the time of 'declaration' but ARGUMENT is the actual value with supply for that PARAMETER.
- A function can have multiple parameters ( seperated by commas)
- A function can be called multiple times as well by invoking the function name again with the round brackets.
>>> to understand all the above informations below is a function described which includes the information to backup the arguments:
*/

function greet(name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}

greet('Manas', 'Dongre');

/* "name and lastName" are the parameter that are given at the time of the declration of the function 
    and "'Manas', 'Dongre'" are the PARAMETERS, which are the actual values with supply for the parameters. 
*/



