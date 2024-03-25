// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.



let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[10]);  // This line will cause an index error
console.log("Before correction:", numbers[4]);  // This will print the last element
numbers[4] = 6;  // Correcting the index
console.log("After correction:", numbers[4]);  // This will print the corrected value