// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirts(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`T-Shirt size: ${size}, Message: ${message}`);
}

make_shirts(); // Large shirt with default message
make_shirts('Medium'); // Medium shirt with default message
make_shirts('Small', 'Hello, World!'); // Small shirt with custom message
