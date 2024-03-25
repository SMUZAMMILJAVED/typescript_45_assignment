// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians: string[]): void {
    // Prints the name of each magician in the array
    magicians.forEach(magician => console.log(magician));
}

// Array of magician names
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

// Call the function to show magicians
showMagicians(magicianNames);
