let selectedColors = ['red', 'blue'];
console.log(selectedColors);

//Let's say that we want to add a certain another color to the list(arrays in general) then :
selectedColors.push('green');
console.log(selectedColors);

//1 another way to do that is by using the 'index' as the element of arrays starts by the number [0] so,
// to get add another color in the array on the third number is [2], in simple terms lenght of an array is dynamic and can change;

selectedColors[3] = 'purple';
console.log(selectedColors);

//Let's say we only want to log the element on the first index of the array, then;

console.log(selectedColors[0]);

/*Just as we discussed that everything in the javaScript is an object similarly arrays are object
  and one characteristic of array is that we can store multiple elements of different types in an array;
*/

selectedColors[4] = 1;
console.log(selectedColors);

/*There are multiple types of methods we can use to manipulate our arrays (structure to store a list of items)
  that we will discuss further will delving deep into the arrays in particular.*/
  