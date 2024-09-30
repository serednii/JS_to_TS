
// task 1
// let i = 10

// while (--i) {
//     const f = (j) => {
//         setTimeout(() => {
//             console.log(j)
//         });
//     }
//     f(i)
// }



// while (--i) {
//     setTimeout((j, o) => {
//         console.log(j, o + 5)
//     }, 0, i, i);
// }


//task 2
// var a = {}
// if (a === {}) {
//     a = 123
// }
// console.log(a)

//task 3
// console.log([...[...'...']].length)

//task 4
// while (true) {// Переповниться очередь call stack
//     setTimeout(console.log('test'))
// }

//task 5

setTimeout(() => {
    console.log(1)
})

const promise = new Promise((resolve) => {
    console.log(2)
    resolve(new Promise((resolve) => {
        resolve(3)
    }))
})

promise.then(message => {
    console.log(message)
})

console.log(4)