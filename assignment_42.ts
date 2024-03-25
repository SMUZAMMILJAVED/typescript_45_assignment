// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function showMagician(magicians: string[]): void {
    // Prints the name of each magician in the array
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): void {
    // Modifies the array of magicians by adding "the Great" to each magician's name
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Array of magician names
const magicianName: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

// Call makeGreat function to modify magician names
makeGreat(magicianName);

// Call the function to show magicians to confirm the modification
showMagician(magicianName);
