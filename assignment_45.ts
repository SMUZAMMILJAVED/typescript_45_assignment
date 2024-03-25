// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { [key: string]: any } {
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Add extra information to the car object
    extras.forEach(extra => {
        const key = Object.keys(extra)[0];
        const value = extra[key];
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", { color: "blue" }, { year: 2022 });

// Print the object to make sure all the information was stored correctly
console.log(carInfo);
