
const nums = [1, 2, 3, 4, 5]


const tot = nums.reduce(function (acc, currval) {
    console.log(acc)
    return acc + currval
}, 10)
console.log(`${tot} is the total value`);

// Arrow Function

const tota = nums.reduce((acc, currval) => {
    console.log(acc)
    return acc + currval
}, 0)
console.log(`${tota} is the total value`);