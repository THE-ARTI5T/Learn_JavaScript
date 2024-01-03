function addNum(num1, num2) {
    console.log(num1 + num2);
}
addNum("3", 4)
addNum("a", 4)
addNum(3, "4")
addNum(3, 4)


// Rest Operator (...)

// when the size of input is not defined we use rest operator
function calculateCart(...num1) {
    return num1
}
console.log(calculateCart(200, 100, 400, 1))



function onef() {
    const name = "Naman"
    const name1 = "Namanupd"
    function twof() {
        const naam = "Sri"
        console.log(name);
    }
    console.log(name1);
    twof()
}
onef()