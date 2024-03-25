// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alien_color3: string = 'green';// red ,yellow

if (alien_color3 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else if (alien_color3 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color3 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}