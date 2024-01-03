// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// All other values except these values comes under truthy values

// Examples of Truthy Values
// "0", 'false', " ", [], {}


// Nullish Coalescing Operator (??)
// For null and Undefined

let val = 5 ?? 10 // Output will be 5
val = null ?? 10 // Output will be 10
val = undefined ?? 5 // Output will be 5
val = null ?? 5 ?? 10 // Output will be 5