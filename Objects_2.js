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

console.log(regUser);
console.log(regUser.name);
console.log(regUser.name.fullName);
console.log(regUser.name.fullName.firstName);
console.log(regUser.name.fullName.lastName);