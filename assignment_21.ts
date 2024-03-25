// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let languages: { name: string, creator: string, year: number }[] = [
    { name: "JavaScript", creator: "Brendan Eich", year: 1995 },
    { name: "Python", creator: "Guido van Rossum", year: 1991 },
    { name: "Java", creator: "James Gosling", year: 1995 },
    { name: "C++", creator: "Bjarne Stroustrup", year: 1985 },
    { name: "TypeScript", creator: "Anders Hejlsberg", year: 2012 }
];

// Printing information about each programming language
console.log("\nProgramming Languages:");
languages.forEach(lang => {
    console.log(`${lang.name} - Created by ${lang.creator} in ${lang.year}`);
});