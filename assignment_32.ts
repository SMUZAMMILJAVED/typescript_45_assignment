// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users: string[] = ['john', 'alice', 'bob', 'emma', 'sarah'];
let new_users: string[] = ['alice', 'mike', 'sarah', 'chris', 'laura'];

for (let new_username of new_users) {
    let isUsernameTaken: boolean = false;

    for (let existing_username of current_users) {
        if (new_username.toLowerCase() === existing_username.toLowerCase()) {
            isUsernameTaken = true;
            break;
        }
    }

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
        current_users.push(new_username); // Add the new username to current_users list
    }
}
