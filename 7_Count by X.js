// Adhi Setiyoko
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];
//     for(let i = 1; i <= n; i++){
//         z.push(i * x);
//     }
//     return z;

//   }

// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => ++i * x);
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => ++i * x);


console.log(countBy(2, 10));