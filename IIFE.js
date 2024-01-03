// Immediately Invoked Function Expressions (IIFE)

/* 
    We use IIFE to remove any global scope pollution in our function.
    Sometimes the declaration in our global scope causes pollution in our function, therefore we require IIFE to remove that pollution.
*/

// Syntax-> (function declaration)();


// Named IIFE
(function user() {
    console.log("DB Connected")
})();

// Arrow IIFE
(() => {
    console.log(`Again Connected`)
})();

// Arrow IIFE with parameter
((name) => {
    console.log(`Name is ${name}`)
})('Naman')
