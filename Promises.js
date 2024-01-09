// Promises: The Promise object represents eventual completion or failure of an asynchronous operation and its resulting value.



// 1 Method to define Promise

// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Asyn task is Complete');
//         resolve();
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log('Asyn done');
// });


// 2 Method to define Promise

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Asyn task 2 Comp');
//         resolve()
//     }, 2000)
// }).then(function () {
//     console.log('Done 2');
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ Myname: "Naman", email: "Naman@naman.com" })
//     }, 3000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function (res, rej) {
//     let errrr = true;
//     if (errrr) {
//         res({ userName: "Srivastav", email: "Gg@vastav.com" })
//     }
//     else {
//         rej('Error Ji')
//     }
// })

// promiseFour.then(function (user) {
//     console.log(user)
//     return user.userName
// }).then(function (username) {
//     console.log(username)
// }).catch(function (msg) {
//     console.log(msg);
// }).finally(function () {
//     console.log("Promise is Rejected or Resolved")
// })


// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let errrr = true;
//         if (!errrr) {
//             resolve({ userName: "Srivastav", email: "Gg@vastav.com" })
//         }
//         else {
//             reject('Error Ji')
//         }
//     }, 3000);
// })


// The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.

// async function consumePromiseFive() {
//     try {
//         const res = await promiseFive;
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();



// Same work but two methods
// 1.
// async function getAllUsers() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// getAllUsers();

// 2.
fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data)
}).catch(function () {
    console.log("Error again")
})