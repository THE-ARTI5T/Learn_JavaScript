// 2. Constructor Method (Contains singleton object)

const user = new Object()

user.id = 123
user.name = "Naman"
user.isLoggedIn = true
// console.log(user)

const regUser = {
    email: "nam@nam.com",
    name: {
        fullName: {
            firstName: "Naman",
            lastName: "Sri"
        }
    }
}

// console.log(regUser);
// console.log(regUser.name);
// console.log(regUser.name.fullName);
// console.log(regUser.name.fullName.firstName);
// console.log(regUser.name.fullName.lastName);


// Spread Operator (...)

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }

// Two ways to merge objects
// 1.
const obj3 = Object.assign({}, obj1, obj2)

// 2.
const obj4 = { ...obj1, ...obj2 };

console.log(obj3)
console.log(obj4)