// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "hello";

console.log(string1 === string2); // true
console.log(string1 !== string2); // false
// • Tests using the lower case function
const mixedCaseString: string = "HeLLo WoRLd";
console.log(mixedCaseString.toLowerCase() === mixedCaseString); // false
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;
const num3: number = 10;

console.log(num1 === num3); // true
console.log(num1 !== num3); // false
console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 >= num3); // true
console.log(num1 <= num3); // true
// • Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && y < z); // true (both conditions met)
console.log(x < y || y > z); // true (at least one condition met)
console.log(x > y && y < z); // false (first condition not met)
console.log(x > y || y > z); // false (neither condition met)
// • Test whether an item is in a array
const array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // true
// • Test whether an item is not in a array
const fruits: string[] = ['apple', 'banana', 'orange'];

console.log(!fruits.includes('grape')); // true (not in array)

