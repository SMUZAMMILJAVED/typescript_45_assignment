// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
let city1 = city_country('Lahore', 'Pakistan');
let city2 = city_country('Paris', 'France');
let city3 = city_country('Sydney', 'Australia');

// Print the returned values
console.log(city1);
console.log(city2);
console.log(city3);
