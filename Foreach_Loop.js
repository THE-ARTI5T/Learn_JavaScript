
const myArr = ['Iron Man', 'Doctor Strange', 'Black Panther']

myArr.forEach(function (val) {
    // console.log(val)
});
// Output
// Iron Man
// Doctor Strange
// Black Panther


// Arrow Function
myArr.forEach((val) => {
    // console.log(val)
})
// Output
// Iron Man
// Doctor Strange
// Black Panther


myArr.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
})
// Output
// Iron Man 0['Iron Man', 'Doctor Strange', 'Black Panther']
// Doctor Strange 1['Iron Man', 'Doctor Strange', 'Black Panther']
// Black Panther 2['Iron Man', 'Doctor Strange', 'Black Panther']


const marvel = [
    {
        name: "Iron Man",
        power: "Arc Reactor",
    },
    {
        name: "Doctor Strange",
        power: "Eye of Agamodo",
    },
    {
        name: "Black Panther",
        power: "Superhuman"
    },
    {
        name: "Spider Man",
        power: "Web Shooters"
    },
    {
        name: "Captain America",
        power: "Shield"
    },
    {
        name: "Thor",
        power: "Hammer"
    },
    {
        name: "Hawkeye",
        power: "Precise Aim"
    },
    {
        name: "Hulk",
        power: "Strength"
    },
    {
        name: "Ant Man",
        power: "Size Manipulation"
    }
]

marvel.forEach((val) => {
    console.log(`${val.name}'s power is ${val.power}.`)
});
