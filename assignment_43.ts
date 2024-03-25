// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagiciane(magicians: string[]): void {
    // Prints the name of each magician in the array
    magicians.forEach(magician => console.log(magician));
}

function makeGreats(magicians: string[]): string[] {
    // Creates a new array with "the Great" added to each magician's name
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}

// Array of magician names
const magicianNamee: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

// Call makeGreat function with a copy of the array
const modifiedMagicianNames: string[] = makeGreats([...magicianNamee]);

// Call the function to show magicians with original names
console.log("Original Magicians:");
showMagiciane(magicianNamee);

// Call the function to show magicians with "the Great" added to each name
console.log("\nModified Magicians:");
showMagiciane(modifiedMagicianNames);
