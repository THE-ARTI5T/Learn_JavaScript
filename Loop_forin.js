const myObj = {
    "js": "JavaScript",
    "Cpp": "C++",
    "tsx": "TypeScript"
}
for (const key in myObj) {
    console.log(key);
}
// Output
// js
// Cpp
// tsx

for (const key in myObj) {
    console.log(myObj[key])
}
// Output
// JavaScript
// C++
// TypeScript

for (const key in myObj) {
    console.log(`${key} is for ${myObj[key]}`);
}
// Output
// js is for JavaScript
// Cpp is for C++
// tsx is for TypeScript